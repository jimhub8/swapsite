import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _075e3ab8 = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _10f7e730 = () => interopDefault(import('../pages/Carousel.vue' /* webpackChunkName: "pages/Carousel" */))
const _852e03b0 = () => interopDefault(import('../pages/Cart.vue' /* webpackChunkName: "pages/Cart" */))
const _52e2d6e9 = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _5259ad31 = () => interopDefault(import('../pages/checkout/index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _77b7e0b2 = () => interopDefault(import('../pages/example.vue' /* webpackChunkName: "pages/example" */))
const _93b5773e = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _7cd10a22 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _36cbf0f4 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _32ac1e53 = () => interopDefault(import('../pages/privacy/index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _546b8364 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _4a7b86e1 = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _1b0a3227 = () => interopDefault(import('../pages/subcategories/index.vue' /* webpackChunkName: "pages/subcategories/index" */))
const _195b829a = () => interopDefault(import('../pages/vendor/index.vue' /* webpackChunkName: "pages/vendor/index" */))
const _f3984a5e = () => interopDefault(import('../pages/login/index copy.vue' /* webpackChunkName: "pages/login/index copy" */))
const _a84900de = () => interopDefault(import('../pages/category/_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _a16064ee = () => interopDefault(import('../pages/shop/_id.vue' /* webpackChunkName: "pages/shop/_id" */))
const _1006db62 = () => interopDefault(import('../pages/subcategories/_id.vue' /* webpackChunkName: "pages/subcategories/_id" */))
const _3e10b01a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _075e3ab8,
    name: "account"
  }, {
    path: "/Carousel",
    component: _10f7e730,
    name: "Carousel"
  }, {
    path: "/Cart",
    component: _852e03b0,
    name: "Cart"
  }, {
    path: "/category",
    component: _52e2d6e9,
    name: "category"
  }, {
    path: "/checkout",
    component: _5259ad31,
    name: "checkout"
  }, {
    path: "/example",
    component: _77b7e0b2,
    name: "example"
  }, {
    path: "/faq",
    component: _93b5773e,
    name: "faq"
  }, {
    path: "/inspire",
    component: _7cd10a22,
    name: "inspire"
  }, {
    path: "/login",
    component: _36cbf0f4,
    name: "login"
  }, {
    path: "/privacy",
    component: _32ac1e53,
    name: "privacy"
  }, {
    path: "/register",
    component: _546b8364,
    name: "register"
  }, {
    path: "/shop",
    component: _4a7b86e1,
    name: "shop"
  }, {
    path: "/subcategories",
    component: _1b0a3227,
    name: "subcategories"
  }, {
    path: "/vendor",
    component: _195b829a,
    name: "vendor"
  }, {
    path: "/login/index copy",
    component: _f3984a5e,
    name: "login-index copy"
  }, {
    path: "/category/:id",
    component: _a84900de,
    name: "category-id"
  }, {
    path: "/shop/:id",
    component: _a16064ee,
    name: "shop-id"
  }, {
    path: "/subcategories/:id",
    component: _1006db62,
    name: "subcategories-id"
  }, {
    path: "/",
    component: _3e10b01a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
