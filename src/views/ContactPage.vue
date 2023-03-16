<template>
    <div id="contactPage">

        <div id="UtilityBar">
            <h1>Konktaktų sistema</h1>
            <search-box></search-box>
            <filter-button></filter-button>
            <display-change-button></display-change-button>
            <br>
            <p>Iš viso rasta: <b> 152 kandidatų</b></p>
        </div>
        <contact-page></contact-page>
        <pagination-buttons></pagination-buttons>
    </div>
</template>
  
  
<script>

import contactPage from "../components/ContactPage/Contacts/contactPage.vue"
import paginationButtons from "../components/ContactPage/paginationButtons.vue"
import searchBox from "../components/ContactPage/searchBox.vue"
import filterButton from "../components/ContactPage/filterButton.vue"
import displayChangeButton from '../components/ContactPage/displayChangeButton.vue'
export default {
    name: 'app',
    components: {
        'contact-page': contactPage,
        'pagination-buttons': paginationButtons,
        'search-box': searchBox,
        'filter-button': filterButton,
        'display-change-button': displayChangeButton,
    },
    data() {
        return {

        }
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
</style>
  