import Vue from 'vue'
import Router from '../router'
import Store from '../store'
import axios from 'axios'
import Qs from 'qs'
import Element, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

export const baseURL = window.config.baseUrl
// 请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  if (localStorage.token) {
    config.headers['Authorization'] = localStorage.token
  }
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做些什么
  return response
}, error => {
  // 当响应异常时
  let isTimeout = error.toString().includes('timeout')
  if (isTimeout) {
    Vue.prototype.$notify({
      title: '提醒',
      message: '请求超时,请刷新页面或检查网络',
      type: 'warning',
      position: 'bottom-right'
    })
  }
  let isLogTimeout = error.toString().includes('401')
  if (isLogTimeout) {
    // 登录超时, 跳转至登录界面
    Vue.prototype.$message({
      message: '登录过期，请重新登录！',
      type: 'warning',
      showClose: true
    })
    // 重置登录状态
    Store.commit('signStatusUpdate', false)
    Router.push({
      name: 'Login'
    })
  }
  return Promise.reject(error)
})

// export {
//   fetch
// }

function innerState (res, showError, url) {
  /**
   * 处理服务器内部状态 【与后端规则保持一致】
   * @param {object} res 服务器返回内容
   * @param {boolean} showError 是否显示错误
   * @param {string} url  请求aip地址
   * */
  let isFail = res.data.code !== 'T'
  if (res && res.data && isFail) {
    // 状态码异常
    if (showError) {
      // 显示错误提示
      Message({
        showClose: true,
        message: res.data.message && res.data.message !== '' ? `数据错误：${res.data.message}` : `错误url(${url})`,
        type: 'error'
      })
    } else {
      // 隐示错误提示
      if (typeof res.data === 'object') console.error(`错误${res.data.code ? `Code：${res.data.code}` : 'URL：'}(${url})`)
    }
  }
}

/**
  * HTTP status
  * 2xx 正常处理完毕
  * 3xx 发生重定向
  * 4xx 服务器内部错误
  * 5xx 请求服务器错误
  **/
function handleSuccess (params) {
  /**
   * 请求服务器成功
   * @param {object} params 参数
   * @param {object} res 返回对象
   * @param {string} url 请求方法地址
   * @param {boolean} showError 是否显示服务器请求错误message
   * */
  let {res, showError, url} = params
  if (res && res.status === 200) {
    innerState(res, showError, url) // 服务器请求状态（自定义）
    return res
  } else if (res && showError && res.status > 300) {
    // 状态码异常
    Message({
      showClose: true,
      message: `服务器请求错误，METHOD：${url}`,
      type: 'error'
    })
  }
}
function handleError ({error, showError, url}) {
  /**
   * 请求服务器出错
   * @param {object} params 参数对象
   * @param {object} params.error 请求服务器错误时的返回内容
   * @param {string} params.url 请求api地址
   * */
  if (error && (error.status >= 200 && error.status < 400)) {
    return error
  } else if (error && error.status === 500) {
    innerState(error, showError, url)
  } else {
    // 状态码异常
    Message({
      showClose: true,
      message: `请求服务器错误，METHOD：${url}`,
      type: 'error'
    })
  }
}

export default (options, data, requestType, requestOptions) => {
  /**
   * 从服务端获取数据
   * @param  {object}  options  【必传值】
   * @param  {string}  options.url 模块名称
   * @param  {string}  options.method 请求方法 (post or get)
   * @param  {string}  options.showError 请求错误提示，默认开启
   * @param  {object}  data 请求方法参数 选填有默认值,也可自定义
   * @param  {object}  headers 请求头 选填有默认值,也可自定义
   * @param {Object} requestOptions 自定义请求设置
   * @return response
   * */
  // 是否开启错误提示,默认开启(不传showError)
  let showError = options.showError === undefined ? true : options.showError
  // 公共参数
  let Public = {}
  // 请求头
  let headers = {}
  // token
  // if (localStorage.token) {
  //   headers['Authorization'] = localStorage.token
  // }
  // 设置post的Content-Type
  if (options.method !== 'get') {
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  let isJson = options.type && options.type === 'json'
  if (isJson) {
    headers['Content-Type'] = 'application/json'
  }
  // http默认配置
  let httpOptions = {
    // 请求协议 (post or get)
    method: options.method,
    // 基础URL前缀
    baseURL: options.proxy ? '' : baseURL,
    // 请求的api地址
    url: options.url,
    // 超时时间(ms)
    timeout: 2000000
  }
  if (requestOptions && Object.keys(requestOptions).length) {
    // 处理自定义请求配置
    httpOptions = Object.assign({}, httpOptions, requestOptions)
  } else {
    // 默认常规的请求配置
    let defaultOptions = {
      // 表示跨域请求时是否需要使用凭证
      withCredentials: options.withCredentials !== undefined ? options.withCredentials : true,
      // get 请求时带的参数
      params: Object.assign(Public, data),
      // post 请求的数据
      data: requestType ? (requestType.params ? requestType.params : data) : (isJson ? Object.assign(Public, data) : Qs.stringify(Object.assign(Public, data))),
      // 请求头信息headers
      headers: requestType ? Object.assign({}, {...requestType.headers, ...headers}) : headers
    }
    // 请求协议对应的方法
    options.method === 'get' ? delete defaultOptions.data : delete defaultOptions.params
    httpOptions = Object.assign({}, httpOptions, defaultOptions)
    // console.log(httpOptions, '请求参数httpOptions')
  }
  // 返回promise对象
  return new Promise((resolve, reject) => {
    axios(httpOptions)
      .then((res) => {
        // console.log(res, '请求返回res')
        // 请求正常
        handleSuccess({
          res,
          showError,
          url: options.url
        })
        if (res) resolve(res)
      })
      .catch((error) => {
        // 请求异常
        if (options.showError) {
          handleError({
            error: error.response,
            showError,
            url: options.url
          })
        }
        reject(error)
      })
  })
}
