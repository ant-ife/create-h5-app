import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "router-typhoon-home" */ 'views/typhoon/Home')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
})

// Router Interceptors
// router.beforeEach((to, from, next) => {
// next()
// })

// router.beforeResolve((to, from, next) => {
// next()
// })

// router.afterEach((to, from) => {
// })

export default router
