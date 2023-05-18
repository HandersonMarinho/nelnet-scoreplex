import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _d4508e36 = () => interopDefault(import('../pages/default.vue' /* webpackChunkName: "pages/default" */))
const _0288afda = () => interopDefault(import('../pages/handerson.vue' /* webpackChunkName: "pages/handerson" */))
const _c763e414 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
=======
const _d909dcd0 = () => interopDefault(import('../pages/default.vue' /* webpackChunkName: "pages/default" */))
const _24b8a7cd = () => interopDefault(import('../pages/handerson.vue' /* webpackChunkName: "pages/handerson" */))
const _8f74112e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 1f71298a4be0e1e520c22559b75df3e2a0661aa1

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/default",
    component: _d4508e36,
    name: "default"
  }, {
    path: "/handerson",
<<<<<<< HEAD
    component: _0288afda,
=======
    component: _24b8a7cd,
>>>>>>> 1f71298a4be0e1e520c22559b75df3e2a0661aa1
    name: "handerson"
  }, {
    path: "/",
    component: _c763e414,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
