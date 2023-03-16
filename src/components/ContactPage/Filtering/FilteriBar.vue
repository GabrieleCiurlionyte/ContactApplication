<template>
    <div id="container">
        <filter-field class="filterField" :dataset="{key: 'company', value: companyNames}"></filter-field>
        <filter-field class="filterField" :dataset="{key: 'division', value: divisionNames}"></filter-field>
        <filter-field class="filterField" :dataset="{key: 'departament', value: departamentNames}"></filter-field>
        <filter-field class="filterField" :dataset="{key: 'group', value: groupNames}"></filter-field>
        <filter-field class="filterField" :dataset="{key: 'office', value: officeNames}"></filter-field>
    </div>
</template>
  
<script>
import FilterField from "./FilterField.vue"

export default {
    components: {
        'filter-field': FilterField,
    },
    data() {
        return {
            companyNames: null,
            divisionNames: null,
            departamentNames : null,
            groupNames : null,
            officeNames : null,
        }
    },
    async created() {
        this.companyNames = await this.$filterPlugin.getCompanyNames();
        this.divisionNames = await this.$filterPlugin.getDivisionNames();
        this.departamentNames = await this.$filterPlugin.getDepartamentNames();
        this.groupNames = await this.$filterPlugin.getGroupNames();
        this.officeNames = await this.$filterPlugin.getOfficeNames();
    }
}
</script>
  
<style scoped>
    #container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;

    }
    .filterField {
        max-width: 15%;
        display: inline;
        margin-left: 50px;
        margin-right: 60px;
    }
</style>