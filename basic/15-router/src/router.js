import Vue from 'vue'
import VueRouter from 'vue-router'

// import Movies from './views/Movies'
import Tv from './views/Tv'
import Detail from './views/Detail'
import Page404 from './views/Page404'
import SideBar from './views/SideBar'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
   redirect: '/movie'
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('./views/Movies')
  },
  {
    path: '/television',
    alias: '/tv',
    name: 'tv',
    component: Tv,
    redirect: '/tv/0',
    // props: {
    //   default: true,
    //   sidebar: false
    // },
    children: [
      {
        name: 'detail',
        path: ':id',
        components: {
          default:Detail,
          sidebar: SideBar
        },
        // 路由独享的守卫
        beforeEnter: (to, from, next) => {
          console.log('moviebeforeEnter');
          next()
        },
        props: {
          default:(route) => ({
            id: route.params.id,
            abc:'abc'
          }),
          sidebar:true
        },
      }
    ]
  },

  {
    path: '*',
    component: Page404
  }
]

let router = new VueRouter({
  mode: 'history',
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach');
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve');
  next()
})

export default router