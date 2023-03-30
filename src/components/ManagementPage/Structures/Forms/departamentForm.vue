<template>
    <div class="container">
        <div class="input-fields">
            <input-field>
                <div slot="header">Departamentas</div>
                <div slot="input">
                    <md-input class="input-field" placeholder="Įveskite pavadinimą..." v-model="departament" required></md-input>
                </div>
            </input-field>

            <md-field id="drop-down">
                <label for="Divisions">Divizijos</label>
                <md-select v-model="selectedDivisions" name="division" id="Divisions" multiple>
                    <md-option :value="division.name" v-for="division in allDivisions" :key="division.id">{{  division.name }}</md-option>
                </md-select>
            </md-field>
        </div>
    </div>
</template>
  

<script>
import inputField from "../../../../components/common/inputField.vue"
export default {
    name: 'divisionForm',
    components: {
        'input-field': inputField,
    },
    data() {
        return {
            departament: null,

            selectedDivisions: [],
            allDivisions: [],
        }
    },
    computed: {

    },
    methods: {

    },
    async created() {
        this.allDivisions = await this.$filterPlugin.getDivisions();
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
  