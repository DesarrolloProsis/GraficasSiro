import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VCharts from 'v-charts'
Vue.use(VCharts)


import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
