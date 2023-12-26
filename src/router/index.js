import VueRouter from 'vue-router'
import index from '../pages/index'
// import auth from '../pages/auth'
import registration from '../pages/registration'
import personal from '../pages/personal'
import catalog from '../pages/catalog'
import product from '../pages/product'
import notFound from '../pages/notFound'
import about from '../pages/about'
import basket from '../pages/basket'
import order from '../pages/order'
import info from '../pages/info'

const routes = [
  {
    name: 'home',
    path: '/',
    component: index
  },
  // {
  //   name: 'auth',
  //   path: '/auth',
  //   component: auth
  // },
  {
    name: 'registration',
    path: '/auth/registration',
    component: registration
  },
  {
    name: 'personal',
    path: '/personal',
    component: personal
  },
  {
    name: 'catalog',
    path: '/catalog/:category',
    component: catalog
  },
  {
    name: 'product',
    path: '/catalog/:category/:vendorCode',
    component: product
  },
  {
    name: 'basket',
    path: '/basket',
    component: basket
  },
  {
    name: 'order',
    path: '/order',
    component: order
  },
  {
    name: 'about',
    path: '/about',
    component: about
  },
  {
    name: 'info',
    path: '/info',
    component: info
  },
  {
    path: "*",
    component: notFound
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
