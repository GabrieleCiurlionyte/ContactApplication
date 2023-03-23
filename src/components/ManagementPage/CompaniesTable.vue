<template>
    <div>
        <p>Iš viso rasta:</p>
        <md-table md-card>

            <md-table-row>
                <md-table-head md-numeric>Nr</md-table-head>
                <md-table-head>ID</md-table-head>
                <md-table-head>Pavadinimas</md-table-head>
            </md-table-row>

            <md-table-row v-for="(company, index) in companies" :key="company.id" >
                <md-table-cell md-numeric>{{ index }}</md-table-cell>
                <md-table-cell>{{ company.id }}</md-table-cell>
                <md-table-cell>{{ company.name }}</md-table-cell>
                <md-button class="modifyButton">Redaguoti</md-button>
                <md-button class="deleteButton">Ištrinti</md-button>
            </md-table-row>

        </md-table>
    </div>
</template>
  
<script>
export default {
    name: 'companiesTable',
    data() {
        return {

            showModal: false,
            selected: null,
            companies: null,
        }
    },
    computed:{

    },
    async created() {
        this.companies = await this.$filterPlugin.getCompanies();
    }

}
</script>

<style scoped>


    .modifyButton {
        background-color: #0054A6;
       
    }
    .deleteButton {
        background-color: #A61A11;
    }

</style>

