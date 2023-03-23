<template>
  <md-toolbar id="toolBar" class="md-accent" md-elevation="1">
    <img src="../../assets/icons/Logo.png" class="md-title" style="flex: 1" @click="goToHomePage()">
    <md-button class="md-primary" @click="goToContactPage()">Kontaktai</md-button>
    <md-button class="md-primary" @click="goToCompanyPage()">Įmonės</md-button>
    <md-button class="md-primary" @click="goToStructurePage()">Struktūros</md-button>
    <md-button class="md-primary" @click="goToAdminPage()">Paskyros</md-button>

    <div class="md-toolbar-section-end">
      <img class="icon md-toolbar-section-end" src="../../assets/icons/icons8-male-user-96.png">
        </div>

   
  </md-toolbar>
</template>

<script>
import router from "../../router/router"
export default {
  data() {
    return {

    }
  },
  methods: {
    goToHomePage() {
      router.push('/');
    },
    goToContactPage(){
      router.push('/');
    },
    goToCompanyPage() {
      router.push('/management/companies');
    },
    goToStructurePage() {
      router.push('/management/structures');
    },
    goToAdminPage() {
      //TODO: not implement
      alert("Feature not implemented");
    },
  }
}
</script>

<style scoped>
#toolBar {
  background-color: #1F3F77;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  margin-bottom: 1%;
}

img {
  max-width: 20%
}


.icon {
  max-width: 10%
}

.md-primary {
  color: white;
  font-weight: bold;
}
</style>