import axios from '@/lib/api.request'

export const httpAddPost = ({
  userId,
  title,
  label,
  md
}) => {
  let data = {
    userId,
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

export const httpPost = ({
  search,
  page,
  pageSize
}) => {
  let data = {
    search,
    page,
    pageSize
  }
  return axios.request({
    url: 'article',
    params: data,
    method: 'get'
  })
}