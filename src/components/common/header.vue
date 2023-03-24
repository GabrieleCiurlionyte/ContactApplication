<template>
  <md-toolbar id="toolBar" class="md-accent" md-elevation="1">
    <img src="../../assets/icons/Logo.png" class="md-title" style="flex: 1" @click="goToHomePage()">
    <md-button class="md-primary" @click="goToContactPage()" v-if="this.$store.state.authenticationStore.isAuthenticated">Kontaktai</md-button>
    <md-button class="md-primary" @click="goToCompanyPage()" v-if="this.$store.state.authenticationStore.isAuthenticated">Įmonės</md-button>
    <md-button class="md-primary" @click="goToStructurePage()" v-if="this.$store.state.authenticationStore.isAuthenticated">Struktūros</md-button>
    <md-button class="md-primary" @click="goToAdminPage()" v-if="this.$store.state.authenticationStore.isAuthenticated">Paskyros</md-button>

    <div class="md-toolbar-section-end" v-if="this.$store.state.authenticationStore.isAuthenticated">
      <img class="icon md-toolbar-section-end" src="../../assets/icons/icons8-male-user-96.png">
        </div>

   
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goToHomePage() {
      this.$router.push('/');
    },
    goToContactPage(){
      this.$router.push('/');
    },
    goToCompanyPage() {
      this.$router.push('/management/companies');
    },
    goToStructurePage() {
      this.$router.push('/management/structures');
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