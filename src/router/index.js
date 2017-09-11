import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const novel = () => import('comp/novel/novel')
const community = () => import('comp/community/community')
const discover = () => import('comp/discover/discover')

const routes = [
  {
    path: '/',
    redirect: '/novel'
  },
  {
    path: '/novel',
    component: novel
  },
  {
    path: '/community',
    component: community
  },
  {
    path: '/discover',
    component: discover
  }
]

export default new Router({
  routes,
  linkActiveClass: 'active'
})
