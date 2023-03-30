<template>
    <div class="container">
        <div class="input-fields">
            <input-field>
                <div slot="header">Divizija</div>
                <div slot="input">
                    <md-input class="input-field" placeholder="Įveskite diviziją..." v-model="division" required></md-input>
                </div>
            </input-field>

            <md-field id="drop-down">
                <label for="Offices">Būstinės</label>
                <md-select v-model="selectedOffices" name="office" id="offices" multiple>
                    <md-option :value="office.name" v-for="office in allOffices" :key="office.id">{{  office.name }}</md-option>
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
            division: null,

            selectedOffices: [],
            allOffices: [],
        }
    },
    computed: {

    },
    methods: {

    },
    async created() {
        this.allOffices = await this.$filterPlugin.getOffices();
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
  