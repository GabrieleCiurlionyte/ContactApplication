<template>
  <div>
    <md-dialog :md-active.sync="showModal" :md-click-outside-to-close="false" :md-close-on-esc="false">
      <md-dialog-title>{{ WindowTitle }}</md-dialog-title>

      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-card id="formCard" class="md-layout-item md-size-50 md-small-size-100">

          <div id="main-container">
            <div id="firstColumn">
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('firstName')">
                      <label for="first-name">Vardas*</label>
                      <md-input name="first-name" id="first-name" v-model="form.firstName" :disabled="sending" />
                      <span class="md-error" v-if="!v$.form.firstName.required">Vardas yra būtinas</span>
                      <span class="md-error" v-else-if="!v$.form.firstName.minlength">Įvestas netinkamas vardas</span>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('lastName')">
                      <label for="last-name">Pavarde*</label>
                      <md-input name="last-name" id="last-name" v-model="form.lastName" :disabled="sending" />
                      <span class="md-error" v-if="!v$.form.lastName.required">Pavardė yra būtina</span>
                      <span class="md-error" v-else-if="!v$.form.lastName.minlength">Įvesta netinkama pavardė</span>
                    </md-field>
                  </div>
                </div>

                <md-field :class="getValidationClass('position')">
                  <label for="position">Pozicija*</label>
                  <md-input name="position" id="position" v-model="form.position" :disabled="sending" />
                </md-field>

                <span class="md-subheading">Kontaktinė informacija</span>

                <md-field :class="getValidationClass('email')">
                  <md-icon>email</md-icon>
                  <label for="email">El. paštas*</label>
                  <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                    :disabled="sending" />
                  <span class="md-error" v-if="!v$.form.email.required">Elektroninis paštas yra būtinas</span>
                  <span class="md-error" v-else-if="!v$.form.email.email">Įvestas netinkamas elektroninis paštas</span>
                </md-field>

                <md-field :class="getValidationClass('phone_number')">
                  <md-icon>phone</md-icon>
                  <label for="phone_number">Telefono numeris*</label>
                  <md-input name="phone_number" id="phone_number" v-model="form.phone_number" :disabled="sending" />
                  <span class="md-error" v-if="!v$.form.phone_number.required">Telefono numeris yra būtinas</span>
                  <!-- <span class="md-error" v-else-if="!v$.form.email.email">Įvestas netinkamas telefono numeris</span> -->
                </md-field>

                <div class="md-caption">* Privalomi laukai</div>
              </md-card-content>
            </div>
            <div id="secondColumn">
              <div class="md-subheading">Įmonės detalės</div>

              <md-field>
                <label for="company">Įmonė*</label>
                <md-select v-model="form.company" name="company" id="company" @md-closed="companySelected">
                  <md-option v-for="company in filter.companies" :key="company.id" :value="company.id">{{ company.name
                  }}</md-option>
                </md-select>
              </md-field>

              <md-field>
                <label for="group">Bustinė*</label>
                <md-select v-model="form.office" name="office" id="office" :disabled="!filter.officesAvailable"
                  @md-closed="officeSelected">
                  <md-option v-for="office in filter.offices" :key="office.id" :value="office.id">{{ office.name
                  }}</md-option>
                </md-select>
              </md-field>

              <md-field>
                <label for="division">Divizija*</label>
                <md-select v-model="form.division" name="division" id="division" :disabled="!filter.divisionsAvailable"
                  @md-closed="divisionSelected">
                  <md-option v-for="division in filter.divisions" :key="division.id" :value="division.id">{{ division.name
                  }}</md-option>
                </md-select>
              </md-field>

              <md-field>
                <label for="departament">Departamentas*</label>
                <md-select v-model="form.department" name="departament" id="departament"
                  :disabled="!filter.departentsAvailable" @md-closed="departamentSelected">
                  <md-option v-for="department in filter.departments" :key="department.id" :value="department.id">{{
                    department.name }}</md-option>
                </md-select>
              </md-field>

              <md-field>
                <label for="group">Grupė*</label>
                <md-select v-model="form.group" name="group" id="group" :disabled="!filter.groupsAvailable">
                  <md-option v-for="group in filter.groups" :key="group.id" :value="group.id">{{ group.name }}</md-option>
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
        <md-button class="md-primary" @click="HandleButton">{{ ActionTitle }}</md-button>
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
import { bus } from "../../../main"
import formValidationMixin from "../../../mixins/formValidationMixin";
export default {
  name: 'DialogCustom',
  props: ['showModal', 'EditMode', 'selected'],
  mixins: [formValidationMixin],
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
      company: null,
      office: null,
      division: null,
      department: null,
      group: null,
      photo: null,
    },
    filter: {
      companies: null,
      offices: null,
      officesAvailable: false,
      divisions: null,
      divisionsAvailable: false,
      departments: null,
      departentsAvailable: false,
      groups: null,
      groupsAvailable: false,
    },
    modalInitCount: 0,
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  async created() {
    this.filter.companies = await this.$filterPlugin.getCompanies();
    bus.$on('setUpForm', (selected) => {
      this.setUpForm(selected);})
    },

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
        required,
      },
      position: {
        required,
      },
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

  async beforeUpdate() {
    console.log("Before update triggered");
    console.log("Current init count:" + this.modalInitCount);
    bus.$on('clearContactForm', () => {
      console.log("Clearing form");
      this.clearForm();
    });
    if (this.selected != null && this.modalInitCount == 0) {
      console.log("Before update triggered modal init");
      this.filter.companies = await this.$filterPlugin.getCompanies();
      this.modalInitCount++;
      this.form.firstName = this.selected.name,
        this.form.lastName = this.selected.surname,
        this.form.email = this.selected.email,
        this.form.phone_number = this.selected.phone_number,
        this.form.position = this.selected.position,
        this.form.company = this.selected.company,
        this.form.office = this.selected.office,
        this.form.division = this.selected.division,
        this.form.department = this.selected.departament,
        this.form.group = this.selected.group,
        //TODO: add photo uploading
        this.form.photo = null
    }
    else if (!this.EditMode && this.modalInitCount == 0) {
      this.modalInitCount++;
      this.clearForm();
    }
  },

  methods: {
    CloseModalWindow: function () {
      this.modalInitCount--;
      this.$emit('CloseModalWindow');
    },
    HandleButton: async function () {
      if (this.EditMode) {
        if (this.fieldsValid()) {
          await this.$contactPlugin.editContact(
            this.selected.id,
            this.form.firstName,
            this.form.lastName,
            this.form.phone_number,
            this.form.email,
            this.form.position,
            this.form.company,
            this.form.office,
            this.form.department,
            this.form.division,
            this.form.group);
          this.clearForm();
          this.CloseModalWindow();
          //Update the contact list
        }
        else {
          alert("Neteisingai užpildyta forma");
        }
      }
      else {
        //Creation request
        if (this.fieldsValid()) {
          await this.$contactPlugin.createContact(
            this.form.firstName,
            this.form.lastName,
            this.form.phone_number,
            this.form.email,
            this.form.position,
            this.form.company,
            this.form.office,
            this.form.department,
            this.form.division,
            this.form.group);
          this.clearForm();
          this.CloseModalWindow();
        }
        else {
          alert("Neteisingai užpildyta forma");
        }

      }
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
      this.form.firstName = null;
      this.form.lastName = null;
      this.form.email = null;
      this.form.phone_number = null;
      this.form.position = null;
      this.form.company = null;
      this.form.office = null;
      this.form.division = null;
      this.form.department = null;
      this.form.group = null;
      //TODO: add photo uploading
      this.form.photo = null
    },

    setUpForm(selected) {
      console.log("Setting up the specific form")
      this.form.firstName = selected.name;
      this.form.lastName = selected.surname;
      this.form.email = selected.email;
      this.form.phone_number = selected.phone_number;
      this.form.position = selected.position;
      this.form.company = selected.company;
      this.form.office = selected.office;
      this.form.division = selected.division;
      this.form.department = selected.departament;
      this.form.group = selected.group;
      //TODO: add photo uploading
      this.form.photo = null
    },

    async companySelected() {
      if (this.form.company != null) {
        try {
          this.filter.offices = await this.$filterPlugin.getOfficesFiltered(this.form.company);
          if (this.filter.offices.length > 0 || this.filter.offices == null || this.filter.offices == undefined) {
            this.filter.officesAvailable = true;
          }
        } catch (error) {
          console.log(error);
        }

      }
    },

    async officeSelected() {
      if (this.form.office != null) {
        this.filter.divisions = await this.$filterPlugin.getDivisionsFiltered(this.form.office);
        if (this.filter.divisions.length > 0 || this.filter.divisions == null) {
          this.filter.divisionsAvailable = true;
        }
      }
    },

    async divisionSelected() {
      if (this.form.division != null) {
        this.filter.departments = await this.$filterPlugin.getFilteredDepartaments(this.form.division);
        if (this.filter.departments.length > 0 && this.filter.departments == null) {
          this.filter.departentsAvailable = true;
        }
      }
    },

    async departamentSelected() {
      if (this.form.department != null) {
        console.log(this.form.department.length > 0 && this.form.department == null);
        this.filter.groups = await this.$filterPlugin.getFilteredGroups(this.form.department);
        if (this.filter.groups.length > 0) {
          this.filter.groupsAvailable = true;
        }
      }
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

.md-caption {
  margin-left: 5%;
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

  