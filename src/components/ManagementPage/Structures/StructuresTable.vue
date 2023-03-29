<template>
  <div>
    <p>Iš viso rasta: {{ structures.length }}</p>
    <md-table md-card>
      <md-table-row>
        <md-table-head>Pavadinimas</md-table-head>
        <md-table-head>Tipas</md-table-head>
        <md-table-head>Veiksmas</md-table-head>
      </md-table-row>
      <md-table-row v-for="structure in structures" :key="structure.id">
        <md-table-cell md-numeric>{{ structure.name }}</md-table-cell>
        <md-table-cell>{{  structure.collectionName }}</md-table-cell>
        <md-table-cell> <md-button class="modifyButton" @click="OnModifyClick()">Redaguoti</md-button></md-table-cell>
        <md-table-cell><md-button class="deleteButton" @click="DeleteCompany()">Ištrinti</md-button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>
  
<script>
export default {
  name: 'TableCard',
  data() {
        return {
            structures: null,
        }
    },
  async created() {
    this.structures = await this.$structuresPlugin.getStructures();
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