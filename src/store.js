import Vue from "vue";
import Vuex from "vuex";

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
    }
  },
  actions: {}
});
