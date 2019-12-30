import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/home/Home.vue'
import Study from '@/views/study/Study.vue'
import StudyDetail from '@/views/study/studyDetail/StudyDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/study',
      children: [{
        path: '/study',
        name: 'study',
        component: Study
      }, {
        path: '/studyDetail',
        name: 'studyDetail',
        component: StudyDetail
      }]
    }
  ]
})
