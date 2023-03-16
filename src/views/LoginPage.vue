<template>
    <div class="container">
        <md-button id="button" class="md-icon-button md-raised md-primary">
        <img src="../assets/icons/icons8-undo-96-blue.png">
      </md-button>

      <md-card id="card">
      <md-card-header>
        <div class="md-title">Admin prisijungimas</div>
      </md-card-header>


      <div class="input-fields">

        <input-field>
            <div slot="header">Elektroninis paštas</div>
            <div slot="icon"><img class="icon" src="../assets/icons/icons8-mail-96.png"></div>
            <div slot="input">
                <md-input
                    placeholder="Įveskite el.pašto adresą..."
                    v-model="emailAddress" required></md-input>
            </div>
        </input-field>

        <input-field>
            <div slot="header">Slaptažodis</div>
            <div slot="input">
                <md-input
                    class = "md-toggle-password"
                    placeholder="Įveskite slaptažodį..."
                    v-model="password" required
                    type="password"></md-input>
            </div>
        </input-field>

        <div id="password-remind" class="md-subheading">Pamiršote slaptažodį? <span class="highlight">Pakeisti slaptažodį.</span></div>
      </div>

      
      
    </md-card>

I
    </div>
</template>
  

<script>
import inputField from "../components/common/inputField.vue"
export default {
    name: 'loginPage',
    components : {
        'input-field' : inputField,
    },
    data() {
        return {
            emailAddress : "",
            password : "",
        }
    }
}
</script>
  
<style scoped>

.md-toggle-password {
  text-align: left;
  width : 100%;
  margin-left: 15px;
  
}
    #password-remind {
        padding-top : 5%;
    }

    .md-field.md-has-password .md-toggle-password {
    margin: 0;
    position: absolute;
    right: 0;
    bottom: 0px;
}
    

    .input-fields {
        margin: auto;
        text-align: center;
        max-width: 55%;
    }

    .md-subheading {
        text-align: left;
        color: #666666;
    }

    .icon {
        position: relative;
        max-width: 25px;
        max-height: 25px;
        padding-top: 7px;
        padding-right: 7.5px;
    }


    body {
        background-color: #1F3F77;
    }
    

    #button {
        margin-left: 2%;
        background-color: white;
        position:absolute;
    }


    #card {
        background-color: white; 
        text-align: center;
        max-width: 65%;
        height: 70%;
        margin: auto;
        padding-bottom: 4%;
        margin-top:8%;
    }

    .highlight {
    color: #1F3F77;
    }
</style>
  