<template>
    <div id="detailedContactPage">
        <h1>Detalesnė kontakto informacija:</h1>

        <md-card id="card">
            <md-card-header>
                <img src="../assets/icons/icons8-male-user-96_grey.png" alt="Avatar">
                <div class="md-display-1"><b>Vardas ir pavardė</b></div>
                <div class="md-headline">Pozicija: pozicija</div>
            </md-card-header>

            <div class="column-wrapper">
                <div class="column" id="column1">
                    <div class="md-title">Kontaktinės detalės</div>
                    <div class="column-content">                    
                        <div class="md-subheading">Elektroninis paštas: <span class="highlight"> example@teltonika.lt</span>
                        </div>
                        <div class="md-subheading">Telefono numeris: <span class="highlight"> +00000000000</span></div>
                    </div>
                </div>
                <div class="column" id="column2">
                    <div class="md-title">Kompanijos detalės</div>
                    <div class="column-content">
                        <div class="md-subheading">Kompanija: kompanijos_pavyzdys</div>
                        <div class="md-subheading">Būstinė: būstinės_pavyzdys</div>
                        <div class="md-subheading">Departamentas: <span class="highlight"> departamento_pavyzdys </span></div>
                        <div class="md-subheading">Divizija: <span class="highlight">divizijos pavyzdys</span></div>
                        <div class="md-subheading">Grupė: <span class="highlight">grupės_pavyzdys</span></div>
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

        }
    }
}
</script>
  
<style scoped>
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
  