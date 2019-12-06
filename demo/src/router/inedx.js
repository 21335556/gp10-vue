import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index'

import Movies from '../pages/movies/Movies'
import Theater from '../pages/theaters/Theater'
import Profile from '../pages/profile/Profile'

import Intheater from '../pages/movies/Intheaters'
import Comingsoon from '../pages/movies/Comingsoon'

import Detail from '../pages/detail/Detail'
import City from '../pages/city/City'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies,
    redirect: '/movies/intheater',
    children: [
      {
        path: 'intheater',
        name: 'intheater',
        component: Intheater,
      },
      {
        path: 'comingsoon',
        name: 'comingsoon',
        component: Comingsoon,
      },
    ]
  },
  {
    path: '/theater',
    name: 'theater',
    component: Theater
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

export default new VueRouter({
  // mode: 'history',
  routes
})