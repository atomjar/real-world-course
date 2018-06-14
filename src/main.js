import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Button from '@/components/Button.vue'
import TextInput from '@/components/TextInput.vue'
//registered globally
Vue.component('Button', Button)
Vue.component('TextInput', TextInput)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
