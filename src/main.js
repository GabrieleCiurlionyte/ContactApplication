import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import { MdIcon } from 'vue-material/dist/components';
import {store} from "./store/index"

//TODO: remove and enter only the elements needed
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'

//Importing custom plugins:
import contactPlugin from './plugins/contactPlugin'
import filterPlugin from './plugins/filterPlugin';
import companiesPlugin from './plugins/companiesPlugin';
import authenticationPlugin from './plugins/authenticationPlugin'
import structuresPlugin from './plugins/structuresPlugin'

Vue.prototype.$http = axios;

//Creation of a bus
export const bus = new Vue();

Vue.use(Vuex)
Vue.use(VueMaterial);
Vue.use(MdIcon);
//Using custom plugins 
Vue.use(contactPlugin);
Vue.use(filterPlugin);
Vue.use(companiesPlugin);
Vue.use(authenticationPlugin);
Vue.use(structuresPlugin);

// Vue.material.theme.register('custom', {
//   primary: {
//     color: '#1F3F77',
//     hue: 500
//   },
//   accent: {
//     color: '#0054A6',
//     hue: 700
//   },
//   warn: 'red'
// })

// Vue.material.theme.use('custom')

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router: router,
})
