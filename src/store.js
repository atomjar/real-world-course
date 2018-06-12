import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc', name: 'Adam Jahr' },
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
    getUserName: state => {
      return state.user.name
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
      state.events.concat(events)
    }
  },
  actions: {}
})
