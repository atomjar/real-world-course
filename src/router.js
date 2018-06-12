import Vue from 'vue'
import Router from 'vue-router'
import Events from './views/Events.vue'
import Create from './views/Create.vue'
import Attend from './views/Attend.vue'
import Login from './views/Login.vue'
import firebase from 'firebase'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/events'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: "/",
      name: "events",
      component: Events
    },
    {
      path: "/create",
      name: "create",
      component: Create,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/attend/event/:id",
      name: "attend",
      component: Attend,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router