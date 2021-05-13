import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  token: '', // 获取链接当中的token参数
  userInfo: {}, // 登录用户信息
  loginUser: {},
  proxyUrl: '', // 父窗口代理页面url
  localUrl: '' // 本窗口url
}

const getters = {

}

const actions = {

}

const mutations = {
  // 更新token
  tokenUpdate (state, token) {
    state.token = token
  },
  // 更新登录用户信息
  userInfoUpdate (state, params) {
    state.userInfo = params
  },
  // 更新proxyUrl
  proxyUrlUpdate (state, url) {
    state.proxyUrl = url
  },
  // 更新localUrl
  localUrlUpdate (state, url) {
    state.localUrl = url
  },
  updateUserInfo (state, param) {
    Vue.set(state, 'userInfo', param)
  },
  updateLoginUser (state, param) {
    Vue.set(state, 'loginUser', param)
  }
}

const store = new Vuex.Store({
  modules: {

  },
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: [createPersistedState({ storage: window.localStorage })]
})

export default store
