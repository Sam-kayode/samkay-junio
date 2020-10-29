import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@morioh/v-lightbox/dist/lightbox.css';
import Lightbox from '@morioh/v-lightbox'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(Lightbox);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
