<template>
    <div id="detailedContactPage">
        <h1>Detalesnė kontakto informacija:</h1>

        <md-card id="card">
            <md-card-header>
                <img src="../assets/icons/icons8-male-user-96_grey.png" alt="Avatar">
                <div class="md-display-1" id="name"><b>{{  contact.name + " " + contact.surname }}</b></div>
                <div class="md-headline">{{ contact.position }}</div>
            </md-card-header>

            <div class="column-wrapper">
                <div class="column" id="column1">
                    <div class="md-title">Kontaktinės detalės</div>
                    <div class="column-content">                    
                        <div class="md-subheading">Elektroninis paštas: <span class="highlight"> {{ contact.email }}</span>
                        </div>
                        <div class="md-subheading">Telefono numeris: <span class="highlight"> {{ contact.phone_number }}</span></div>
                    </div>
                </div>
                <div class="column" id="column2">
                    <div class="md-title">Kompanijos detalės</div>
                    <div class="column-content">
                        <div class="md-subheading">Kompanija: {{  contact.company }}</div>
                        <div class="md-subheading">Būstinė: {{  contact.office }}</div>
                        <div class="md-subheading">Departamentas: <span class="highlight"> {{  contact.departament }} </span></div>
                        <div class="md-subheading">Divizija: <span class="highlight">{{  contact.division }}</span></div>
                        <div class="md-subheading">Grupė: <span class="highlight">{{  contact.group }}</span></div>
                    </div>
                </div>
            </div>

        </md-card>
    </div>
</template>
  
  
<script>


export default {
    name: 'app',
    components: {
    },
    data() {
        return {
            id: this.$route.params.id,
            contact: null,
        }
    },
    async created() {
        this.contact = await this.$contactPlugin.getContact(this.id);
    }
}
</script>
  
<style scoped>
#name {
    color: #2B2B2B;
}
#detailedContactPage {
    margin-left: 6.5%;
    margin-right: 6.5%;
    margin-top: 8%;
}

#card {
    padding-bottom: 5%;
}

img {
    background-color: white;
}

h1 {
    font-weight: 300;
    margin: 5% 0 2% 0;
}
.md-display-1 {
    font-weight: 200;
}
.md-headline {
    font-weight: 300;
}
.column-wrapper {
    margin-top: 2.5%;
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

.md-subheading {
    padding-top: 1.5%;
}


.column {
    padding-left: 5%;
}

.column-content {
    margin-top: 5%
}

.highlight {
    color: #0054A6;
}
</style>
  