<template>
    <div id="managementPage">

        <company-modal-window :showModal="showModal&&isCompany"
        @closeModalWindow="showModal = false"></company-modal-window>
        <div id="UtilityBar">
            <h1>{{ pageHeader }}</h1>
            <div id="FunctionalityBar">
                <md-button class="md-icon-button" @click="AddRecord()">
                    <img src="../assets/icons/icons8-plus-sign-64.png">
                </md-button>
                <div class="md-subheading" id="buttonText"> {{ buttonText }}</div>
            </div>

            <br>
            
        </div>
        
        <companies-table v-if="isCompany" class="table"></companies-table>
        <structures-table v-if="!isCompany" class="table"></structures-table>

    </div>
</template>
  
  
<script>
import companiesTable from "../components/ManagementPage/Company/CompaniesTable.vue"
import structuresTable from "../components/ManagementPage/Structures/StructuresTable.vue"
import CompanyModalWindow from "../components/ManagementPage/Company/CompanyModalWindow.vue";
import { bus } from "../main"
export default {
    name: 'management-page',
    components: {
        'companies-table' : companiesTable,
        'company-modal-window' : CompanyModalWindow,
        'structures-table': structuresTable,
    },
    computed: {
        pageHeader() {
            switch (this.$route.params.type) {
                case 'companies':
                    return "Įmonės";
                case 'structures':
                    return "Struktūros"
            }
        },
        buttonText() {
            switch (this.$route.params.type) {
                case 'companies':
                    return "Pridėti naują įmonę";
                case 'structures':
                    return "Pridėti naują struktūrą"
            }
        },
        isCompany() {
            switch (this.$route.params.type) {
                case 'companies':
                    return true;
                case 'structures':
                    return "false"
            }
        }
    },
    data() {
        return {
            showModal: false,
            selected: null,
        }
    },
    created() {
        bus.$on('showCompanyModalWindowEdit', () => {
            this.showModal = true;
        })    
    },
    methods: {
        EditRecord(record) {
            this.selected = record;
            console.log("Editing this record");
            this.showModal = true;
        },
        DeleteRecord(recordID) {
            //Create a confirmation window
        },
        AddRecord() {
            this.showModal = true;
        },
        CloseModalWindow() {
            this.showModal = false;
        }

    }
}
</script>
  
<style scoped>
h1 {
    font-weight: 300;
    margin-top: 0.5%;
    padding-top: 15px;

}

#managementPage {
    margin-top: 9%;
}

#UtilityBar {
    margin-left: 6.5%;
}
#FunctionalityBar {
    display : flex;
    align-items: center;
}

.md-icon-button {
    background-color: #0054A6;
    display: inline;
}

#buttonText {
    padding-left: 1.8%;
}

.table {
    max-width: 85%;
    margin : auto;
}
</style>