<template>
  <div>
    <structures-modal-window :showDialog="showDialog" @closeModalWindow="closeModalWindow()" :md-close-on-esc="false"
      :md-click-outside-to-close="false"></structures-modal-window>
    <p>Iš viso rasta: {{ structures.length }}</p>
    <md-table md-card>
      <md-table-row>
        <md-table-head>Pavadinimas</md-table-head>
        <md-table-head>Tipas</md-table-head>
        <md-table-head>Veiksmas</md-table-head>
      </md-table-row>
      <md-table-row v-for="structure in structures" :key="structure.id">
        <md-table-cell md-numeric>{{ structure.name }}</md-table-cell>
        <md-table-cell>{{ structure.collectionName }}</md-table-cell>
        <md-table-cell> <md-button class="modifyButton" @click="OnModifyClick()">Redaguoti</md-button></md-table-cell>
        <md-table-cell><md-button class="deleteButton" @click="DeleteCompany()">Ištrinti</md-button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>
  
<script>
import StructuresModalWindow from './StructuresModalWindow.vue';
import {bus} from "../../../main";
export default {
  name: 'TableCard',
  components: {
    'structures-modal-window': StructuresModalWindow,
  },
  data() {
    return {
      structures: null,
      showDialog: false,

    }
  },
  async created() {
    bus.$on('ShowStructureModalWindow', (state) => {
      this.showDialog = true;
    })
    this.structures = await this.$structuresPlugin.getStructures();

  },
  methods: {
    closeModalWindow() {
      this.showDialog = false;
    },
    OnModifyClick() {
      //Go through each case of possibly selected items
      this.showDialog = true;
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