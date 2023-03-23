<template>
  <div class="contact">
    <md-card class="card">

      <md-card-header id="header">
        <div @click="test">
          <md-avatar>
            <img src="../../../assets/icons/icons8-male-user-96_grey.png" alt="Avatar">
          </md-avatar>

          <div class="md-title"><b>
              <slot name="name">Vardas ir pavardė</slot>
            </b></div>
          <div class="md-subhead">
            <slot name="position">pozicija</slot>
          </div>
        </div>
      </md-card-header>

      <md-card-content @click="test">
        <div @click="test">
          Telefono nr: <slot name="phone">+00000000000</slot><br>
          El. paštas: <slot name="email">example@teltonika.lt</slot><br>
          Adresas: <slot name="address">Saltoniškių g. 2</slot>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-icon-button md-raised" @click="editButtonClicked()">
          <img src="../../../assets/icons/icons8-pencil-drawing-96.png">
        </md-button>
        <md-button id="deleteButton" class="md-icon-button md-raised" @click="deleteButtonClicked()">
          <img src="../../../assets/icons/icons8-delete-96.png">
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {
    test() {
      this.$emit("GoToDetailPage");
    },
    editButtonClicked() {
      this.$emit('EditContact');
    },
    deleteButtonClicked() {
      this.$emit('DeleteContact');
    },
    GoToDetailPage() {
      console.log("Going to detail page");
    }
  }

}
</script>

<style scoped>
#card {
  width: 100%;
  max-width: 100%;
}

.contact {
  width: 250px;
  padding: 0.5%;
  max-height: 50%;
  height: 20%;
  transition: transform 0.2s ease-in-out;
  margin-left: 2%;
}

#deleteButton {
  background-color: #A61A11;
}

.md-icon-button {
  background-color: #0054A6;
}
</style>