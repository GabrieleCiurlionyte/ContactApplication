<template>
  <div id="contactPage">
    <div class="card-wrapper">

      <contact-card v-for="contact in contacts" :key="contact.id"
      v-on:EditContact="EditContact(contact)" v-on:DeleteContact="DeleteContact(contact)">
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
import router from "../../../router/router"
export default {
  props: ['contacts'],
  components: {
    'contact-card': contactCard,
  },
  data() {
    return {

    }
  },
  methods: {
    test() {
      alert("It works")
    },
    GoToDetailPage(id) {
      alert("Hey")
      console.log("Going to detail page");
      router.push(`/detailedContactPage/${id}`);
    },
    EditContact(contact) {
      this.$emit('EditContact', contact);
    },
    DeleteContact(contact) {
      this.$emit('DeleteContact', contact);
    }
  }
}
</script>
  
<style scoped>
#contactPage[data-v-f1cea5ba] {
  margin-top: 0%;
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 6.5%;
  margin-right: 2%;
  margin-top: 0%;
}

</style>