import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueMaterial from 'vue-material'
//TODO: remove and enter only the elements needed
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: #3fffbe, // The primary color of your brand
  accent: #1a11e8 // The secondary color of your brand
));

@import "~vue-material/dist/theme/all"; // Apply the theme

Vue.use(VueMaterial);


new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
