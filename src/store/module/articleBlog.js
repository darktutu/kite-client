import { fetch } from '@request'

const state = () => ({
  blogs: {
    // blog 信息列表
    count: 0,
    list: [],
    page: 1,
    pageSize: 25
  },
  blogInfo: {
    // blog 详细信息
  },
  blogArticleList: {
    // blog 所含有的文章列表
    count: 0,
    list: [],
    page: 1,
    pageSize: 25
  }
})

const mutations = {
  SET_ARTICLE_BLOG_LIST (state, data) {
    // 设置文章专栏列表
    state.blogs = data
  },
  SET_ARTICLE_BLOG_INFO (state, data) {
    // 设置个人专栏详细信息
    state.blogInfo = data
  },
  SET_ARTICLE_BLOG_ARTICLE_LIST (state, data) {
    // 设置个人专栏含有的文章列表
    state.blogArticleList = data
  }
}

const actions = {
  GET_ARTICLE_BLOG_INFO ({ commit, dispatch, state }, parameter) {
    // 获取个人专栏信息
    return fetch({
      url: '/article-blog/info',
      method: 'get',
      parameter: { params: parameter }
    }).then(result => {
      commit('SET_ARTICLE_BLOG_INFO', result.data.articleBlog)
      return result
    })
  },
  GET_ARTICLE_BLOG_ARTICLE_LIST ({ commit, dispatch, state }, parameter) {
    // 获取个人专栏所含有的文章
    return fetch({
      url: '/article-blog/article-list',
      method: 'get',
      parameter: { params: parameter }
    }).then(result => {
      commit('SET_ARTICLE_BLOG_ARTICLE_LIST', result.data)
      return result
    })
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
