import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueMaterial from 'vue-material'
//TODO: remove and enter only the elements needed
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'

//Custom plugins:
import contactPlugin from './plugins/contactPlugin'

Vue.prototype.$http = axios;

Vue.use(VueMaterial);
Vue.use(contactPlugin);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
