<template>
    <div id="window">
        <md-dialog :md-active.sync="showModal" :md-click-outside-to-close="false" :md-close-on-esc="false" class="dialog">
            <md-dialog-title>{{ dialogName }}</md-dialog-title>

            <md-field class="inputField">
                <label>Įmonės pavadinimas</label>
                <md-input v-model="companyName" :placeholder="placeholderText"></md-input>
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
    props: ['showModal', 'company'],
    data: () => ({
        isEdit: false,
        selected: null,
        companyName: "",
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
        },
        placeholderText() {
            if (this.isEdit) {
                return this.company;
            }
            else {
                return "";
            }
        }
    },
    created() {
        bus.$on('showCompanyModalWindowEdit', (selected) => {
            console.log("item received");
            this.isEdit = true;
            this.selected = selected;
            console.log(this.selected);
        })
    },
    methods: {
        closeModalWindow: function () {
            this.$emit('closeModalWindow');
        },
        async submitAction() {
            if (this.isEdit) {
                //TODO: Send a modify request
                console.log("Modify request");
            }
            else {
                console.log("Post request");
                try {
                    const response = await this.$companiesPlugin.createCompany(this.companyName);
                    
                }
                catch (error) {
                    //Show modal window that incorrect
                    alert("Incorrect request");
                }
            }
            bus.$emit('refreshCompanies');
            this.$emit('closeModalWindow');
        }
    }
}
</script>
  
<style scoped>
.dialog {
    padding: 8%;
}
</style>
  
