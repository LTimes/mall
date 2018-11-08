import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './module/user'

export default new Vuex.Store({
  state: {
    user: {
      name: 'liu'
    }
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    user
  }
})