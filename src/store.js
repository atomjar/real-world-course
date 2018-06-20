import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import fb from './firebaseConfig.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [],
    notifications: []
  },
  getters: {
    getEvent: state => id => {
      return state.events.filter(event => event.id === id)[0]
    }
  },
  mutations: {
    STORE_EVENTS(state, events) {
      state.events = events
    },
    SET_USER(state, user) {
      state.user = user
    },
    ADD_NOTIFICATION(state, message) {
      state.notifications.push(message)
    },
    REMOVE_NOTIFICATION(state, messageToRemove) {
      state.notifications = state.notifications.filter(
        notification => notification.message !== messageToRemove
      )
    }
  },
  actions: {
    fetchEvents({ commit }) {
      fb.eventsCollection.onSnapshot(querySnapshot => {
        const fetchedEvents = []
        querySnapshot.forEach(eventDoc => {
          fetchedEvents.push(eventDoc.data())
        })
        commit('STORE_EVENTS', fetchedEvents)
      })
    },
    userSignUp({ commit }, form) {
      fb.auth
        .createUserWithEmailAndPassword(form.email, form.password)
        .then(user => {
          const newUser = {
            id: user.user.uid,
            name: form.name
          }

          commit('SET_USER', newUser)

          const authenticatedUser = fb.auth.currentUser
          authenticatedUser.updateProfile({ displayName: form.name })

          console.log('authenticatedUser is', authenticatedUser)

          fb.db
            .collection('users')
            .doc(user.user.uid)
            .set({
              name: form.name
            })
        })
        .catch(error => console.log(error))
    },
    userLogin(context, form) {
      fb.auth
        .signInWithEmailAndPassword(form.email, form.password)
        .catch(error => console.log(error))
    },
    userLogout() {
      return fb.auth.signOut()
    }
  }
})
