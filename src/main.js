import Vue from 'vue'
import App from './App.vue'
import Vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  Vuetify,
  render: h => h(App)
}).$mount('#app')
