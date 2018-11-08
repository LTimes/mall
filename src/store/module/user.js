
import {
  setToken,
  getToken
} from '@/lib/util'
import { resolve } from 'url';

export default {
  state: {
    userName: '',
    userId: '',
    avatorImg: '',
    token: getToken()
  },
  mutations: {
    setAvator(state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId(state, id) {
      state.userId = id
    },
    setUserName(state, name) {
      state.userName = name
    },
    setToken(state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 登录
    // handleLogin({commit}, {name, password}) {
    //   name = name.trim()
    //   return new Promise((resolve, reject) => {

    //   })
    // }
  }
}