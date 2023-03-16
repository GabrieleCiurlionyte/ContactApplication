<template>
  <div id="contactPage">
    <div class="card-wrapper">

        <contact-card v-for="contact in contacts" :key="contact.id">
          <div slot="name">{{ contact.name + " " + contact.surname }}</div>
          <div slot="position">{{ contact.position }}</div>
          <div slot="phone"> {{ contact.phone_number }}</div>
          <div slot="email"> {{ contact.email }}</div>
          <div slot="address"> {{ contact.office }}</div>
        </contact-card>

      
    </div>
  </div>
</template>
  
<script>

import contactCard from "./contactCard.vue"
export default {
  props: ['contacts'],
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
  justify-content: center;
  /* Adjust as needed */
  margin-left: 6.5%;
  margin-right: 6.5%;
}
</style>