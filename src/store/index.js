import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './module/user'

export default new Vuex.Store({
  state: {
    user: {
      
    },
    isLogin: false
  },
  getters: {

  },
  mutations: {
    setLogin(state, isLogin) {
      state.isLogin = isLogin
    }
  },
  actions: {
    handleIsLogin({commit}, isLogin) {
      commit('setLogin', isLogin)
    }
  },
  modules: {
    user
  }
})