<template>
    <div id="managementPage">

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
import companiesTable from "../components/ManagementPage/CompaniesTable.vue"
import structuresTable from "../components/ManagementPage/StructuresTable.vue"

export default {
    name: 'management-page',
    components: {
        'companies-table' : companiesTable,
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
        recordCount() {
            //TODO:
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
    async created() {
        this.contacts = await this.$contactPlugin.getContacts(30, 1);
        this.contactCount = await this.$contactPlugin.getContactCount();
    },
    methods: {
        EditRecord(record) {
            this.selected = record;
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