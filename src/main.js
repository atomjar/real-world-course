import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fb from './firebaseConfig.js'
import Button from '@/components/Button.vue'
import TextInput from '@/components/TextInput.vue'
//registered globally
Vue.component('Button', Button)
Vue.component('TextInput', TextInput)

Vue.config.productionTip = false

fb.auth.onAuthStateChanged(user => {
  if (!user) {
    store.commit('SET_USER', null)
    return
  }

  if (user.displayName) {
    const loggedInUser = {
      id: user.uid,
      name: user.displayName
    }
    store.commit('SET_USER', loggedInUser)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
