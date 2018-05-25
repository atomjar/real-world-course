import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'a', username: 'Adam Jahr' },
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
      return state.events.filter(event => event.id === id)
    }
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push({ ...event })
      /// ??? EVAN: Thoughts on pushing event with spread operator like this?
    },
    STORE_EVENTS(state, events) {
      state.events = events
    },
    ADD_ATTENDEE(state, { eventId, user }) {
      const event = state.events.filter(event => event.id === eventId)

      event[0].attendees[user.id] = user.username
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
    }
  }
})
