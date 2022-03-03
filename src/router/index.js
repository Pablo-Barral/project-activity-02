import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index.vue'
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
    component: () =>
    import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
    meta:{
      title: 'Compass-home'
    }
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: () =>
    import(/* webpackChunkName: "unauthorized" */ "../views/unauthorized/index.vue"),
    meta:{
      title: 'Unauthorized'
    }
  },
  {
    path: '*',
    name: 'notFound',
    component: () =>
    import(/* webpackChunkName: "notFound" */ "../views/notFound/index.vue"),
    meta:{
      title: 'Page not fount'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
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
