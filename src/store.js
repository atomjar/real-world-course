import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr', city: 'Orlando' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
  },
  getters: {
    getUserCity: state => {
      return state.user.city
    },
    getCategoriesLength: state => {
      return state.categories.length
    },
    getCategoryByString: state => string => {
      return state.categories.find(cat => cat === string)
    }
  },
  mutations: {},
  actions: {}
})
