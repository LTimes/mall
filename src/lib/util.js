import Cookies from 'js-cookie'
// cookie保存的天数
import config from '@/config'


export const TOKEN_KEY = 'token'
const AVATOR_KEY = 'avatorImg'
const USERID_KEY = 'userId'
const USERNAME_KEY = 'userName'

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: config.cookieExpires || 1
  })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

// 设置头像
export const setAvator = (avator) => {
  Cookies.set(AVATOR_KEY, avator, {
    expires: config.cookieExpires || 1
  })
}
export const getAvator = () => {
  const avator = Cookies.get(AVATOR_KEY)
  if (avator) return avator
  else return false
}

// 设置id
export const setUserId = (userId) => {
  Cookies.set(USERID_KEY, userId, {
    expires: config.cookieExpires || 1
  })
}
export const getUserId = () => {
  const userId = Cookies.get(USERID_KEY)
  if (userId) return userId
  else return false
}

// 设置名字
export const setName = (name) => {
  Cookies.set(USERNAME_KEY, name, {
    expires: config.cookieExpires || 1
  })
}
export const getName = () => {
  const name = Cookies.get(USERNAME_KEY)
  if (name) return name
  else return false
}