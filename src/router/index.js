import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index.vue'
import home from '../views/home/index.vue'
import unauthorized from '../views/unauthorized/index.vue'
import notFound from '../views/notFound/index.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: unauthorized
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if ( to.name === 'home' && !store.state.logged ){
    next({
      path: '/unauthorized',
      replace: true
    })
  } else {
    next();
  }
})
export default router
