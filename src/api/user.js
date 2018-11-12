
import axios from '@/lib/api.request'

export const httpRegister = ({
  name,
  pwd
  }) => {
  let data = {
    name,
    pwd
  }
  return axios.request({
    url: 'register',
    data,
    method: 'post'
  })
}


// export const login = ({ name, password}) => {
//   let data = {
//     name,
//     password
//   }
//   return axios.request({
//     url: '',
//     data: data,
//     method: 'post'
//   })
// }

// export const getUserInfo = (token) => {
//     return axios.request({
//         url: 'get_info',
//         params: {
//             token
//         },
//         method: 'get'
//     })
// }