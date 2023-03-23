<template>
    <div id="contactPage">

        <modal-window :showModal="showModal"
        :EditMode="isEdit" 
        :selected="selected"
        @CloseModalWindow ="CloseModalWindow"></modal-window>

        <div id="UtilityBar">
            <h1>Konktaktų sist/ema</h1>

            <div id="FunctionalityBar">
                <search-box id="search"></search-box>
                <md-button class="md-icon-button" @click="isFilter = !isFilter">
                    <img src="../assets/icons/icons8-funnel-96.png">
                </md-button>

                <md-button class="md-icon-button" @click="isTable = !isTable">
                    <img src="../assets/icons/icons8-table-96.png">
                </md-button>

                <md-button class="md-icon-button" @click="AddContact()">
                    <img src="../assets/icons/icons8-plus-sign-64.png">
                </md-button>
            </div>

            <br>
            <p>Iš viso rasta: <b> {{ contactCount }}</b></p>
            <filter-bar v-if="isFilter"></filter-bar>
        </div>
        <contact-page :contacts="contacts" v-if="!isTable"
        @EditContact="EditContact($event)" @DeleteContact="DeleteContact($event)"></contact-page>
        <contact-table v-if="isTable"></contact-table>
        <pagination-buttons></pagination-buttons>
    </div>
</template>
  
  
<script>

import contactPage from "../components/ContactPage/Contacts/contactPage.vue"
import paginationButtons from "../components/ContactPage/paginationButtons.vue"
import searchBox from "../components/ContactPage/searchBox.vue"
import filterBar from "../components/ContactPage/Filtering/FilteriBar.vue"
import contactTable from "../components/ContactPage/Contacts/table.vue"
import modalWindow from "../components/ContactPage/Contacts/contactModalWindow.vue"

export default {
    name: 'app',
    components: {
        'contact-page': contactPage,
        'pagination-buttons': paginationButtons,
        'search-box': searchBox,
        'filter-bar': filterBar,
        'contact-table': contactTable,
        'modal-window' : modalWindow,
    },
    data() {
        return {
            contacts: null,
            contactCount: 0,
            isFilter: false,
            isTable: false,
            isEdit: false,
            showModal : false,
            selected : null,
        }
    },
    async created() {
        this.contacts = await this.$contactPlugin.getContacts(30, 1);
        this.contactCount = await this.$contactPlugin.getContactCount();
    },
    methods: {
        EditContact(contact) {
            this.isEdit = true;
            this.selected = contact;
            this.showModal = true;
        },
        DeleteContact(contact) {
            //Create a confirmation window
        },
        AddContact() {
            this.isEdit = false;
            this.showModal = true;
        },
        CloseModalWindow(){
            this.showModal = false;
        }

    }
}
</script>
  
<style scoped>
#FunctionalityBar {
    display: flex;
    align-items: center;
}

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
}

.md-icon-button {
    background-color: #0054A6;
    display: inline;
}
</style>
  