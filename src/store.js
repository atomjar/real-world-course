import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let id = 0

export default new Vuex.Store({
  state: {
    user: { firstName: 'Adam', lastName: 'Jahr' },
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
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push({
        ...event,
        id: id++,
        owner: {
          id: id++
        }
      })
    },
    STORE_EVENTS(state, events) {
      state.events = events
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
