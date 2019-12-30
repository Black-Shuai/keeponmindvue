import Vue from 'vue'
import {post, get, patch, put} from '../http/http.js'
// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$patch = patch
Vue.prototype.$put = put

export const login = p => post('/api/login', p)
export const getMessage = p => get('/api/getMessage', p)
