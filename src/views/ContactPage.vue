<template>
    <div id="contactPage">

        <div id="UtilityBar">
            <h1>Konktaktų sistema</h1>
            <search-box id="search"></search-box>
            <filter-button></filter-button>
            <display-change-button></display-change-button>
            <br>
            <p>Iš viso rasta: <b> {{ contactCount }}</b></p>
            <filter-bar></filter-bar>
        </div>
        <contact-page :contacts ="contacts"></contact-page>
        <pagination-buttons></pagination-buttons>
    </div>
</template>
  
  
<script>

import contactPage from "../components/ContactPage/Contacts/contactPage.vue"
import paginationButtons from "../components/ContactPage/paginationButtons.vue"
import searchBox from "../components/ContactPage/searchBox.vue"
import filterButton from "../components/ContactPage/filterButton.vue"
import displayChangeButton from '../components/ContactPage/displayChangeButton.vue'
import filterBar from "../components/ContactPage/Filtering/FilteriBar.vue"



export default {
    name: 'app',
    components: {
        'contact-page': contactPage,
        'pagination-buttons': paginationButtons,
        'search-box': searchBox,
        'filter-button': filterButton,
        'display-change-button': displayChangeButton,
        'filter-bar': filterBar
    },
    data() {
        return {
            contacts: null,
            contactCount : 0,
        }
    },
    async created() {
        this.contacts = await this.$contactPlugin.getContacts(30,1);
        this.contactCount = await this.$contactPlugin.getContactCount(); 
    },
    methods: {
        

    }
}
</script>
  
<style scoped>
#UtilityBar {
    margin-left: 6.5%;
}

h1 {
    font-weight: 300;
    margin-top: 0.5%;
    padding-top: 15px;

}

#contactPage {
    margin-top: 7%;
}

#search {
    max-width: 35%;
    background-color: #EDEDED;
    padding-bottom: 5px;
}
</style>
  