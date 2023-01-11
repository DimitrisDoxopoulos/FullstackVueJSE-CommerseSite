import { createRouter, createWebHistory } from 'vue-router'
// import CartPage from '../views/CartPage.vue'
// import ProductPage from '../views/ProductPage.vue'
// import ProductDetailPage from '../views/ProductDetail.vue'

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: () => import ('../views/ProductPage.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetailPage.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/CartPage.vue')
  },
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
