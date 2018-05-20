import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Button from '@/components/Button.vue'

Vue.config.productionTip = false
//registered globally
Vue.component('base-button', Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
