import axios from '@/lib/api.request'

export const httpAddPost = ({
  title,
  label,
  md
}) => {
  let data = {
    title,
    label,
    md
  }
  return axios.request({
    url: 'addArticle',
    data,
    method: 'post'
  })
}