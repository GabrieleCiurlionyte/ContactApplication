import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueMaterial from 'vue-material'
import { MdIcon } from 'vue-material/dist/components';
//TODO: remove and enter only the elements needed
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'

//Custom plugins:
import contactPlugin from './plugins/contactPlugin'
import filterPlugin from './plugins/filterPlugin';

Vue.prototype.$http = axios;

Vue.use(VueMaterial);
Vue.use(MdIcon);
Vue.use(contactPlugin);
Vue.use(filterPlugin);

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
