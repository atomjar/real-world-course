import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Icon from '@/components/Icon.vue'
//registered globally
Vue.component('Icon', Icon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
