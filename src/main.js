import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Icon from '@/components/Icon.vue'
import Button from '@/components/Button.vue'
import TextInput from '@/components/TextInput.vue'
//registered globally
Vue.component('Icon', Icon)
Vue.component('Button', Button)
Vue.component('TextInput', TextInput)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
