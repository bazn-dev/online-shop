import VueRouter from 'vue-router'
import index from '../pages/index'
// import auth from '../pages/auth'
import registration from '../pages/registration'
import personal from '../pages/personal'
import catalog from '../pages/catalog'
import search from '../pages/search'
import product from '../pages/product'
import notFound from '../pages/notFound'
import about from '../pages/about'
import basket from '../pages/basket'
import order from '../pages/order'
import success from '../pages/success'
import info from '../pages/info'
import license from '../pages/license'

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
    name: 'catalog',
    path: '/catalog/:category/:subCategory',
    component: catalog
  },
  {
    name: 'catalog',
    path: '/catalog/:category/:subCategory/:subSubCategory',
    component: catalog
  },
  {
    name: 'search',
    path: '/search',
    component: search
  },
  {
    name: 'product',
    path: '/product/:vendorCode',
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
    name: 'success',
    path: '/order/success',
    component: success
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
    name: 'license',
    path: '/license',
    component: license
  },
  {
    path: "*",
    component: notFound
  }
]

export default new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes
})
