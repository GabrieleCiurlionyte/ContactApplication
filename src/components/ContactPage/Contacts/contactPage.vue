<template>
  <div id="contactPage">
    <div class="card-wrapper">
      <contact-card></contact-card>
      <contact-card></contact-card>
      <contact-card></contact-card>
      <contact-card></contact-card>

    </div>
  </div>
</template>
  
<script>

import contactCard from "./contactCard.vue"
export default {
  components: {
    'contact-card': contactCard,
  },
  data() {
    return {

    }
  },
}
</script>
  
<style scoped>
  .card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Adjust as needed */
  margin-left: 6.5%;
  margin-right: 6.5%;
}
</style>