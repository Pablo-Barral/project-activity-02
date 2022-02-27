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
    component: login,
    meta:{    
      title: 'Compass-Login'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta:{
      title: 'Compass-home'
    }
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: unauthorized,
    meta:{
      title: 'Unauthorized'
    }
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound,
    meta:{
      title: 'Page not fount'
    }
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

router.afterEach((to) =>{
  if (to.meta && to.meta.title){
    document.title = to.meta.title
  }
})
export default router
