<template>
    <div class="container">
        <md-dialog-alert :md-active.sync="showError" :md-content="ErrorText" md-confirm-text="Gerai!" />
        <md-card id="card">
            <div id="cardContent">
                <md-card-header>
                    <div class="md-title">Admin prisijungimas</div>
                </md-card-header>


                <div class="input-fields">

                    <input-field>
                        <div slot="header">Elektroninis paštas</div>
                        <div slot="icon"><img class="icon" src="../assets/icons/icons8-mail-96.png"></div>
                        <div slot="input">
                            <md-input class="input-field" placeholder="Įveskite el.pašto adresą..." v-model="emailAddress"
                                required></md-input>
                        </div>
                    </input-field>

                    <input-field>
                        <div slot="header">Slaptažodis</div>
                        <div slot="input">
                            <md-input class="input-field md-toggle-password" placeholder="Įveskite slaptažodį..."
                                v-model="password" required type="password"></md-input>
                        </div>
                    </input-field>

                    <div id="password-remind" class="md-subheading">Pamiršote slaptažodį? <span class="highlight">Pakeisti
                            slaptažodį.</span></div>
                    <md-button class="SignInButton" text-color="white !important"
                        @click="AtteptLogin(emailAddress, password)">Prisijungti</md-button>
                    <div class="highlight" @click="goToHomepageWithNoAuth">Arba tęsti neprisijungus.</div>
                </div>
            </div>
        </md-card>
    </div>
</template>
  

<script>
import inputField from "../components/common/inputField.vue"
export default {
    name: 'loginPage',
    components: {
        'input-field': inputField,
    },
    data() {
        return {
            emailAddress: "",
            password: "",
            showError: false,
        }
    },
    computed: {
        ErrorText() {
            const tryAgain = "Bandykite dar kartą...";
            if(this.emailAddress == "" && this.password == "") {
                return "Tušti elektroninio pašto ir slaptažodžio laukai. " + tryAgain;
            }
            else if(this.emailAddress == "") {
                return "Neįvestas el. pašto adresas. " + tryAgain;
            }
            else if(this.password == "") {
                return "Neįvestas slaptažodis. " + tryAgain;
            }
            else {
                return "Neteisingi prisijungimo duomenys. " + tryAgain;
            }
        },
    },
    methods: {
        goToHomepageWithNoAuth() {
            //Going to homepage with no authorization
            //Clear past authorization token
            this.$store.commit('authenticationStore/updateAuthenticationToken', null);
            //Set auth state
            this.$store.commit('authenticationStore/updateAuthenticationState', false);
            this.GoToMainPage();
        },
        async AtteptLogin(email, password) {
            //Authentication call
            const response = await this.$authenticationPlugin.Login(email, password);
            if (response != null) {
                console.log("Succesful login");
                //Set auth state true
                this.$store.commit('authenticationStore/updateAuthenticationState', true);
                //Update token
                this.$store.commit('authenticationStore/updateAuthenticationToken', response.token);
                //Go to main page
                this.GoToMainPage();
            }
            else {
                console.log("Unsuccessful login");
                this.showError = true;
            }

        },
        GoToMainPage() {
            this.$store.commit('authenticationStore/updateHeaderState', true);
            this.$router.push('/contacts');
        },
    },
}
</script>
  
<style scoped>
.input-field {
    padding: 5%;
}

#cardContent {
    background-color: white;
}

.SignInButton {
    background-color: #1F3F77;
    color: white;
    margin: 15px;
}

.container {
    max-width: 100vw;
    max-height: 100vh;
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #1F3F77;
    padding-top: 5%;
}

.md-toggle-password {
    text-align: left;
    width: 100%;
    margin-left: 15px;

}

#password-remind {
    padding-top: 5%;
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

#card {
    background-color: white;
    text-align: center;
    max-width: 65%;
    height: 70%;
    margin: auto;
    padding-bottom: 10%;
}

.highlight {
    color: #1F3F77;
}
</style>
  