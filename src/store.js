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
    events: []
  },
  getters: {
    getEvent: (state) => (id) => {
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
    // ADD_ATTENDEE(state, { eventId, user }) {
    //   const event = state.events.filter(event => event.id === eventId)[0]

    //   Vue.set(event.attendees, user.id, user.name)
    // },
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    fetchEvents({ commit }) {
      const eventsCollection = fb.eventsCollection.onSnapshot(querySnapshot => {
        const fetchedEvents = []
        querySnapshot.forEach(event => {
          fetchedEvents.push(event.data())
          commit('STORE_EVENTS', fetchedEvents)
          console.log('events', fetchedEvents)
        })
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
      fb.auth.createUserWithEmailAndPassword(form.email, form.password)
        .then(user => {
          const newUser = {
            id: user.user.uid,
            name: form.name
          }
          commit('SET_USER', newUser)
          fb.db.collection('users').doc(user.user.uid).set({
            name: form.name
          })
        })
        .catch(error => console.log(error))
    },
    userLogin({ commit }, form) {
      fb.auth.signInWithEmailAndPassword(form.email, form.password)
        .then(
          user => {
            fb.usersCollection.doc(user.user.uid).get()
              .then(res => {
                const loggedInUser = {
                  id: user.user.uid,
                  name: res.data().name
                }
                commit('SET_USER', loggedInUser)
              }).catch(err => {
                console.log(err)
              })
          }
        )
        .catch(error => console.log(error))
    }
  }
})

