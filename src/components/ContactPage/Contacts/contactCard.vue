<template>
  <md-card id="card">
    <md-card-header>
      <md-avatar>
        <img src="../../../assets/icons/icons8-male-user-96_grey.png" alt="Avatar">
      </md-avatar>

      <div class="md-title"><b>Vardas ir pavardė</b></div>
      <div class="md-subhead">Pozicija: pozicija</div>
    </md-card-header>

    <md-card-content>
      Telefono nr: +00000000000<br>
      El. paštas: example@teltonika.lt<br>
      Adresas: Saltoniškių g. 2
    </md-card-content>

    <md-card-actions>
      <md-button class="md-icon-button md-raised">
        <img src="../../../assets/icons/icons8-pencil-drawing-96.png">
      </md-button>
      <md-button id="deleteButton" class="md-icon-button md-raised">
        <img  src="../../../assets/icons/icons8-delete-96.png">
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
#card {
  max-width: 20%;
  padding : 0.5%;
  margin: 2%;
  transition: transform 0.2s ease-in-out;
}
#card:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.266);
}
#deleteButton{
  background-color: #A61A11;
}
.md-icon-button {
    background-color: #0054A6;
   }
</style>