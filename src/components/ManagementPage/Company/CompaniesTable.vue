<template>
    <div>
        <p>Iš viso rasta:</p>

        <md-dialog-confirm :md-active.sync="isDeletionWindowActive" md-title="Ar tikrai norite ištrinti?"
            :md-content="`Norite ištrinti įrašą pavadinimu: ` + selected.name" md-confirm-text="Taip"
            md-cancel-text="Ne" @md-cancel="onDeleteCancel" @md-confirm="onDeleteConfirm" />

        <div>
            <md-table v-model="companies" md-card @md-selected="onSelect">
                <md-table-row v-model="companies" md-card @md-selected="onSelect">
                    <md-table-head>ID</md-table-head>
                    <md-table-head>Pavadinimas</md-table-head>
                </md-table-row>
                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                    <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
                    <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                    <md-table-cell> <md-button class="modifyButton"
                            @click="OnModifyClick()">Redaguoti</md-button></md-table-cell>
                    <md-table-cell><md-button class="deleteButton"
                            @click="DeleteCompany()">Ištrinti</md-button></md-table-cell>
                </md-table-row>
            </md-table>
        </div>
    </div>
</template>
  
<script>
import { bus } from "../../../main"
export default {
    name: 'companiesTable',
    data() {
        return {
            showModal: false,
            selected: {},
            companies: null,
            isDeletionWindowActive: false,
        }
    },
    computed: {

    },
    async created() {
        this.companies = await this.$filterPlugin.getCompanies();
        //Register an event bus to always listen to request to update companies
        //TODO: fix not working
        bus.$on('refreshCompanies', async () => {
            console.log("Refresh companies triggered");
            console.log("Refreshing companies");
            this.companies = await this.$filterPlugin.getCompanies();
            this.companies = [...this.companies];
            this.$forceUpdate();
        })
    },
    methods: {
        onSelect(item) {
            if(item != null) {
                this.selected = item            
            }
        },
        OnModifyClick() {
            bus.$emit('showCompanyModalWindowEdit', 'selected');
        },

        //Deletion methods
        DeleteCompany() {
            this.isDeletionWindowActive = true;
        },
        async onDeleteConfirm() {
            await this.$companiesPlugin.deleteCompany(this.selected.id);
            this.companies = await this.$filterPlugin.getCompanies();
            this.isDeletionWindowActive = false;
        },
        onDeleteCancel() {
            this.isDeletionWindowActive = false;
        }
    }

}
</script>

<style scoped>
.modifyButton {
    background-color: #0054A6;
    color: white;

}

.deleteButton {
    background-color: #A61A11;
    color: white;
}
</style>

