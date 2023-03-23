<template>
    <div>
        <p>Iš viso rasta:</p>
            <div>
                <md-table v-model="companies" md-card @md-selected="onSelect">
                    <md-table-row v-model="companies" md-card @md-selected="onSelect">
                        <md-table-head>ID</md-table-head>
                        <md-table-head>Pavadinimas</md-table-head>
                    </md-table-row>
                    <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
                        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                        <md-table-cell> <md-button class="modifyButton" @click="OnModifyClick()">Redaguoti</md-button></md-table-cell>
                        <md-table-cell><md-button class="deleteButton">Ištrinti</md-button></md-table-cell>
                    </md-table-row>
                </md-table>
            </div>
    </div>
</template>
  
<script>
import {bus} from "../../../main"
export default {
    name: 'companiesTable',
    data() {
        return {
            showModal: false,
            selected: {},
            companies: null,
        }
    },
    computed: {

    },
    async created() {
        this.companies = await this.$filterPlugin.getCompanies();
    },
    methods: {
        onSelect(item) {
            console.log(item);
            this.selected = item
        },
        OnModifyClick() {
            bus.$emit('showCompanyModalWindowEdit', 'selected');
        },
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

