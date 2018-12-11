import { httpLogin } from '@/api/user'

import {
  setToken,
  getToken,
  setUserId,
  getUserId,
  setAvator,
  getAvator,
  setName,
  getName
} from '@/lib/util'

export default {
  state: {
    userName: getName(),
    userId: getUserId(),
    avatorImg: getAvator(),
    token: getToken()
  },
  mutations: {
    setAvator(state, avatorPath) {
      state.avatorImg = avatorPath
      setAvator(avatorPath)
    },
    setUserId(state, id) {
      state.userId = id
      setUserId(id)
    },
    setUserName(state, name) {
      state.userName = name
      setName(name)
    },
    setToken(state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 登录
    handleLogin({commit}, {name, pwd}) {
      return new Promise((resolve, reject) => {
        httpLogin({
          name,
          pwd
        }).then(res => {
          if (res.data.success) {
            commit('setToken', res.data.token)
            commit('setUserId', res.data.id)
            commit('setUserName', res.data.name)
            commit('setAvator', res.data.avator)
            resolve()
          } else {
            console(res.data.message)
          }
        }).catch(err => {
          console.log(err)
        })
      })
    }
  }
}