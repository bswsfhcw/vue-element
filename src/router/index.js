import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/first'
import ElementUi from '@/components/elementUi'
import Ssq from '@/components/balls/ssq'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Ssq',
      component: Ssq
    },
    {
      path: '/First',
      name: 'First',
      component: First
    },
    {
      path: '/ElementUi',
      name: 'ElementUi',
      component: ElementUi
    },
    {
      path: '/Ssq',
      name: 'Ssq',
      component: Ssq
    }
  ]
})
