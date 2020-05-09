import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
  /*{
    path: '/home',
    name: 'home',
    component: () => window.innerWidth > 480 ? import('../views/Home.vue') : import('../views/_mobile/Home.vue')
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path:'/searchresults',
    name: 'searchresults',
    component: () => import("../views/SearchResult.vue")
  }*/
  {
    path: '/',
    name: '',
    component:() => import('../views/Home.vue')
  },
  {
    path: '/certification',
    name: 'certification',
    component:() => import("../views/Certification.vue")
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
