<template>
    <div class="container">
        <div class="input-fields">
            <input-field>
                <div slot="header">Grupės</div>
                <div slot="input">
                    <md-input class="input-field" placeholder="Įveskite grupę..." v-model="departament" required></md-input>
                </div>
            </input-field>

            <md-field id="drop-down">
                <label for="Departaments">Departamentai</label>
                <md-select v-model="selectedDepartaments" name="departament" id="Departaments" multiple>
                    <md-option :value="departament.name" v-for="departament in allDepartaments" :key="departament.id">{{  departament.name }}</md-option>
                </md-select>
            </md-field>
        </div>
    </div>
</template>
  

<script>
import inputField from "../../../../components/common/inputField.vue"
export default {
    name: 'departamentForm',
    components: {
        'input-field': inputField,
    },
    data() {
        return {
            departament: null,

            selectedDepartaments: [],
            allDepartaments: [],
        }
    },
    computed: {

    },
    methods: {

    },
    async created() {
        this.allDepartaments = await this.$filterPlugin.getDepartaments();
    }
}
</script>
  
<style scoped>
.input-field {
    padding: 5%;
    max-width: 100%;
}

.container {
    max-width: 50vw;
    max-height: 100vh;
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.input-fields {
    margin: auto;
    max-width: 50%;
    text-align: center;
}
</style>
  