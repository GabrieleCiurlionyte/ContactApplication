<template>
  <div>
    <md-dialog :md-active.sync="showModal" :md-click-outside-to-close = false>
      <md-dialog-title>{{ WindowTitle }}</md-dialog-title>

      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-card id="formCard" class="md-layout-item md-size-50 md-small-size-100">

          <div id="main-container">
            <div id="firstColumn">
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('firstName')">
                      <label for="first-name">Vardas</label>
                      <md-input name="first-name" id="first-name" v-model="form.firstName"
                        :disabled="sending" />
                      <span class="md-error" v-if="!v$.form.firstName.required">Vardas yra būtinas</span>
                      <span class="md-error" v-else-if="!v$.form.firstName.minlength">Įvestas netinkamas vardas</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('lastName')">
                      <label for="last-name">Pavarde</label>
                      <md-input name="last-name" id="last-name" v-model="form.lastName" :disabled="sending" />
                      <span class="md-error" v-if="!v$.form.lastName.required">Pavardė yra būtina</span>
                      <span class="md-error" v-else-if="!v$.form.lastName.minlength">Įvesta netinkama pavardė</span>
                    </md-field>
                  </div>
                </div>

                <md-field :class="getValidationClass('position')">
                  <label for="position">Pozicija</label>
                  <md-input name="position" id="position" v-model="form.position" :disabled="sending" />
                </md-field>

                <span class="md-subheading">Kontaktinė informacija</span>

                <md-field :class="getValidationClass('email')">
                  <md-icon>email</md-icon>
                  <label for="email">El. paštas</label>
                  <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                    :disabled="sending" />
                  <span class="md-error" v-if="!v$.form.email.required">Elektroninis paštas yra būtinas</span>
                  <span class="md-error" v-else-if="!v$.form.email.email">Įvestas netinkamas elektroninis paštas</span>
                </md-field>

                <md-field :class="getValidationClass('phone_number')">
                  <md-icon>phone</md-icon>
                  <label for="phone_number">Telefono numeris</label>
                  <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                    :disabled="sending" />
                  <span class="md-error" v-if="!v$.form.email.required">Elektroninis paštas yra būtinas</span>
                  <span class="md-error" v-else-if="!v$.form.email.email">Įvestas netinkamas elektroninis paštas</span>
                </md-field>
              </md-card-content>

            </div>
            <div id="secondColumn">
              <div class="md-subheading">Įmonės detalės</div>
              <md-field>
                <label for="company">Įmonė</label>
                <md-select v-model="form.company" name="company" id="company">
                  <md-option value="fight-club">Fight Club</md-option>
                  <md-option value="godfather">Godfather</md-option>
                </md-select>
              </md-field>

              <md-field>
                <label for="division">Divizija</label>
                <md-select v-model="form.division" name="division" id="division">
                  <md-option value="fight-club">Fight Club</md-option>
                  <md-option value="godfather">Godfather</md-option>
                </md-select>
              </md-field>

              <md-field>
                <label for="departament">Departamentas</label>
                <md-select v-model="form.departament" name="departament" id="departament">
                  <md-option value="fight-club">Fight Club</md-option>
                  <md-option value="godfather">Godfather</md-option>
                </md-select>
              </md-field>

              <md-field>
                <label for="group">Grupė</label>
                <md-select v-model="form.group" name="group" id="group">
                  <md-option value="fight-club">Fight Club</md-option>
                  <md-option value="godfather">Godfather</md-option>
                </md-select>
              </md-field>

              <md-button id="photo_button">Įkelti nuotraką</md-button>
            </div>
          </div>


          <md-progress-bar md-mode="indeterminate" v-if="sending" />

        </md-card>

        <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
      </form>

      <md-dialog-actions>
        <md-button class="md-primary" @click="CloseModalWindow">Uždaryti</md-button>
        <md-button class="md-primary" @click="HandlectionButton">{{ ActionTitle }}</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
  
<script>
import { useVuelidate } from '@vuelidate/core'
import {
  required,
  email,
  minLength,
} from '@vuelidate/validators'



export default {
  name: 'DialogCustom',
  props: ['showModal', 'EditMode', 'selected'],
  setup() {
    return { v$: useVuelidate() }
  },
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      email: null,
      phone_number: null,
      position: null,
      comapny: null,
      office: null,
      division: null,
      department: null,
      group: null,
      photo: null,
    },
    modalInitCount: 0,
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      //TODO: addd more validations for each of the fields
      phone_number: {

      }
    }
  },
  computed: {
    WindowTitle: function () {
      if (this.EditMode) {
        return 'Redaguoti kontaktą';
      }
      else {
        return 'Pridėti naują kontaktą';
      }
    },
    ActionTitle: function () {
      if (this.EditMode) {
        return 'Redaguoti';
      }
      else {
        return 'Pridėti';
      }
    },

  },
  created() {
      //Have axios database and check if get imones request already done in the database
      //Get imones
  },
  //TODO: created lifecycle hook fills the fields:
  beforeUpdate() {
    console.log("Before update triggered");
    if (this.selected != null && this.modalInitCount == 0) {
      console.log("Before update triggered modal init");
      this.modalInitCount++;
      this.form.firstName = this.selected.name,
        this.form.lastName = this.selected.surname,
        this.form.email = this.selected.email,
        this.form.phone_number = this.selected.phone_number,
        this.form.position = this.selected.position,
        this.form.comapny = this.selected.company,
        this.form.office = this.selected.office,
        this.form.division = this.selected.division,
        this.form.department = this.selected.departament,
        this.form.group = this.selected.group,
        //TODO: add photo uploading
        this.form.photo = null
    }
    else if(!this.EditMode && this.modalInitCount == 0) {
      console.log("Before update triggered modal init");
      this.modalInitCount++;
      this.form.firstName = null;
        this.form.lastName = null;
        this.form.email = null;
        this.form.phone_number = null;
        this.form.position = null;
        this.form.comapny = null;
        this.form.office = null;
        this.form.division = null;
        this.form.department = null;
        this.form.group = null;
        //TODO: add photo uploading
        this.form.photo = null
    }
  },

  methods: {
    CloseModalWindow: function () {
      this.$emit('CloseModalWindow');
      this.modalInitCount--;
    },
    HandlectionButton: function () {
      //TODO: handle the plugin requests of creation or editing

      this.$emit('CloseModalWindow');
      this.modalInitCount--;
    },

    getValidationClass(fieldName) {
      const field = this.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },


    clearForm() {
      this.$v.$reset()
      this.form.firstName = null
      this.form.lastName = null
      this.form.age = null
      this.form.gender = null
      this.form.email = null
    },
    saveUser() {
      this.sending = true

      // Instead of this timeout, here you can call your API

      //Time out 
      // window.setTimeout(() => {
      //   this.lastUser = `${this.form.firstName} ${this.form.lastName}`
      //   this.userSaved = true
      //   this.sending = false
      //   this.clearForm()
      // }, 1500)
    },
    validateUser() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveUser()
      }
    }
  }
}

</script>
  
<style scoped>
#formCard {
  box-shadow: none;
  padding: 5px;
}

#main-container {
  display: flex;
}

#photo_button {
  background-color: #0054A6;
  color: white;
}
.md-subheading {
  text-align: center;
}
#secondColumn {
  margin-left: 10%;
}
</style>

  