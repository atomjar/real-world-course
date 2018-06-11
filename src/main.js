import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const fb = require('./firebaseConfig.js')


import Button from '@/components/Button.vue'
import TextInput from '@/components/TextInput.vue'
//registered globally
Vue.component('Button', Button)
Vue.component('TextInput', TextInput)

Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(user => {
  if (user) {
    const loggedInUser = {
      id: user.uid,
      name: user.displayName
    }
    store.commit('SET_USER', loggedInUser)
  }
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})