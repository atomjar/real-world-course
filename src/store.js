import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { firstName: 'Adam', lastName: 'Jahr' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: []
  },
  getters: {
    getFirstName: state => {
      return state.user.firstName
    },
    getCategoriesLength: state => {
      return state.categories.length
    },
    getCategoryByString: state => string => {
      return state.categories.find(cat => cat === string)
    }
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    STORE_EVENTS(state, events) {
      events.map(event => {
        state.events.push(event)
      })
    }
  },
  actions: {
    fetchEvents({ commit }) {
      /// ??? EVAN: Any suggestions on Vue w/ axios?
      axios.get('http://localhost:3000/events')
        .then(response => {
          commit('STORE_EVENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
});

