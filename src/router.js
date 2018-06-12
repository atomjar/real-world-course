import Vue from 'vue'
import Router from 'vue-router'
import Events from './views/Events.vue'
import Create from './views/Create.vue'
import Attend from './views/Attend.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'events',
      component: Events
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/attend/event/:id',
      name: 'attend',
      component: Attend
    }
  ]
})
