import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import {Message} from 'element-ui'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://120.25.122.173:8810'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')// 获取token，如果session Storage存在token，添加token在每个请求里
    config.data = JSON.stringify(config.data)
    if (token) {
      config.headers = {
        'token': token,
        'Content-Type': 'application/json'
      }
    } else {
      config.headers = {
        'Content-Type': 'application/json'
      }
    }
    return config
  },
  // eslint-disable-next-line handle-callback-err
  error => {
    // eslint-disable-next-line no-undef
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errCode === 2) {
      // eslint-disable-next-line no-undef
      router.push({
        path: '/',
        // eslint-disable-next-line no-undef
        querry: {redirect: router.currentRoute.fullPath}// 从哪个页面跳转
      })
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
        console.log(sessionStorage.getItem('token'))
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
