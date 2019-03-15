import axios from '@/lib/api.request'

// 文章列表
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
// 新增文章
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
// 编辑文章
export const httpEditPost = ({
  postId,
  title,
  label,
  md
}) => {
  let data = {
    postId,
    title,
    label,
    md
  }
  return axios.request({
    url: 'editArticle',
    data,
    method: 'post'
  })
}

// 删除文章
export const httpDeletePost = (postId => {
  let data = {
    postId
  }
  return axios.request({
    url: 'deleteArticle',
    data,
    method: 'POST'
  })
})

// 文章详情
export const httpPostDetail = ((postId, type) => {
  let data = {
    postId,
    type
  }
  return axios.request({
    url: 'articleDetail',
    data,
    method: 'POST'
  })
})