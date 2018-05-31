import Vue from "vue";
import Router from "vue-router";
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
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router