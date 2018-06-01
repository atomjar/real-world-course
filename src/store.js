import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const fb = require('./firebaseConfig.js')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    userProfile: {},
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: []
  },
  getters: {
    getEvent: (state) => (id) => {
      return state.events.filter(event => event.id === id)[0]
    }
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push({ ...event })
    },
    STORE_EVENTS(state, events) {
      state.events = events
    },
    ADD_ATTENDEE(state, { eventId, user }) {
      const event = state.events.filter(event => event.id === eventId)

      Vue.set(event[0].attendees, user.id, user.username)
    },
    setUser(state, user) {
      state.user = user
    },
    setUserProfile(state, profile) {
      state.userProfile = profile
    }
  },
  actions: {
    fetchEvents({ commit }) {
      axios
        .get('http://localhost:3000/events')
        .then(response => {
          commit('STORE_EVENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    addEvent({ commit }, event) {
      commit('ADD_EVENT', event)
    },
    userSignUp({ commit }, form) {
      fb.auth.createUserWithEmailAndPassword(form.email, form.password)
        .then(user => {
          const newUser = {
            id: user.user.uid,
            name: form.name
          }
          commit('setUser', newUser)
          fb.db.collection('users').doc(user.user.uid).set({
            name: form.name
          })
          // this.$router.push('/')
          // I'm getting TypeError: Cannot read property 'push' of undefined
          // Why is router not defined if it's globally injected?
        })
        .catch(error => console.log(error))
    },
    userLogin({ commit }, form) {
      fb.auth.signInWithEmailAndPassword(form.email, form.password)
        .then(
          user => {
            console.log('uid', user.user.uid)
            fb.usersCollection.doc(user.user.uid).get()
              .then(res => {
                const loggedInUser = {
                  id: user.user.uid,
                  name: res.data().name
                }
                commit('setUser', loggedInUser)
                // this.$router.push('/')
              }).catch(err => {
                console.log(err)
              })
          }
        )
        .catch(error => console.log(error))
    }
  }
})

