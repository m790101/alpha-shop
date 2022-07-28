import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import AlphaShop from '../views/AlphaShop'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: AlphaShop
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass : 'active',
  routes
})

export default router
