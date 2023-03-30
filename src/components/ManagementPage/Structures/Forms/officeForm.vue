<template>
    <div class="container">
        <div class="input-fields">
            <input-field>
                <div slot="header">Adresas</div>
                <div slot="input">
                    <md-input class="input-field" placeholder="Įveskite adresą..." v-model="address" required></md-input>
                </div>
            </input-field>

            <input-field>
                <div slot="header">Miestas</div>
                <div slot="input">
                    <md-input class="input-field" placeholder="Įveskite miestą..." v-model="city"></md-input>
                </div>
            </input-field>

            <input-field>
                <div slot="header">Šalis</div>
                <div slot="input">
                    <md-input class="input-field" placeholder="Įveskite šalį..." v-model="country"></md-input>
                </div>
            </input-field>


            <md-field id="drop-down">
                <label for="Companies">Įmonės</label>
                <md-select v-model="selectedCompanies" name="company" multiple>
                    <md-option :value="company.name" v-for="company in allCompanies" :key="company.id">{{  company.name }}</md-option>
                </md-select>
            </md-field>
        </div>
    </div>
</template>
  

<script>
import inputField from "../../../../components/common/inputField.vue"
export default {
    name: 'officeForm',
    components: {
        'input-field': inputField,
    },
    data() {
        return {
            address: null,
            city: null,
            country: null,

            selectedCompanies: [],
            allCompanies: [],
        }
    },
    computed: {

    },
    methods: {

    },
    async created() {
        this.allCompanies = await this.$filterPlugin.getCompanies();
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
  