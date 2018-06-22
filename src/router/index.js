import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import healthInfo from '@/components/healthInfo'
import infoList from '@/components/infoList'
import aboutUs from '@/components/aboutUs'
import infoDetail from '@/components/common/infoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/healthInfo',
      name: 'healthInfo',
      component: healthInfo
    },
    {
      path: '/infoList',
      name: 'infoList',
      component: infoList,
    // children: [{
    //   path: '/infoList/Detail',
    //   name: '用户首页',
    //   component: resolve => require(['@/components/common/infoDetail'], resolve)
    // }
    // ]
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/infoList/Detail',
      name: 'infoDetail',
      component: infoDetail
    }
  ]
})
