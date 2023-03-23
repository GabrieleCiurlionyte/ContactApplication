<template>
    <div id="window">
        <md-dialog :md-active.sync="showModal" :md-click-outside-to-close="false" :md-close-on-esc="false"
        class="dialog">
            <md-dialog-title>{{ dialogName }}</md-dialog-title>
            
            <md-field class="inputField">
                <label>Įmonės pavadinimas</label>
                <md-input v-model="companyName" placeholder="Įveskite įmonės pavadinimą..."
                ></md-input>
            </md-field>

            <md-dialog-actions>
                <md-button class="md-primary" @click="closeModalWindow">Uždaryti</md-button>
                <md-button class="md-primary" @click="submitAction">{{ dialogActionName }}</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>
  
<script>
import { bus } from "../../../main"
export default {
    name: 'CompanyModal',
    props: ['showModal'],
    data: () => ({
        isEdit: false,
        company: null,
        companyName : "",
    }),
    computed: {
        dialogName() {
            if (this.isEdit) {
                return "Redaguoti įmonės duomenis";
            }
            else {
                return "Pridėti naują įmonę";
            }
        },
        dialogActionName() {
            if (this.isEdit) {
                return "Redaguoti";
            }
            else {
                return "Pridėti";
            }
        }
    },
    created() {
        bus.$on('showCompanyModalWindowEdit', (company) => {
            this.company = company;
            this.isEdit = true;
        })
    },
    methods: {
        closeModalWindow: function () {
            this.$emit('closeModalWindow');
        },
        async submitAction() {
            if(this.isEdit) {
                //TODO: Send a modify request
                console.log("Modify request");
            }
            else {
                //TODO: Send a post request
                await this.$companiesPlugin.createCompany("Test2");
                console.log("Post request");
            }
            this.$emit('closeModalWindow');
        }
    }
}
</script>
  
<style scoped>
    .dialog {
        padding : 8%;
    }
</style>
  
