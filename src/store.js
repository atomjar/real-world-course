import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const fb = require('./firebaseConfig.js')

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
    // ADD_EVENT(state, event) {
    //   fb.eventsCollection.add(event)
    // state.events.push({ ...event })
    // },
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

      // axios
      //   .get('http://localhost:3000/events')
      //   .then(response => {
      //     commit('STORE_EVENTS', response.data)
      //   })
      //   .catch(error => {
      //     console.log('There was an error:', error.response)
      //   })
      // },
      // addEvent({ commit }, event) {
      //   commit('ADD_EVENT', event)
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

          fb.db
            .collection('users')
            .doc(user.user.uid)
            .set({
              name: form.name
            })
        })
        .catch(error => console.log(error))
    },
    userLogin({ commit }, form) {
      fb.auth
        .signInWithEmailAndPassword(form.email, form.password)
        .then(user => {
          const loggedInUser = {
            id: user.user.uid,
            name: user.user.displayName
          }
          commit('SET_USER', loggedInUser)
        })
        .catch(error => console.log(error))
    }
  }
})
