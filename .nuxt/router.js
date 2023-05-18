import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d4508e36 = () => interopDefault(import('../pages/default.vue' /* webpackChunkName: "pages/default" */))
const _0288afda = () => interopDefault(import('../pages/handerson.vue' /* webpackChunkName: "pages/handerson" */))
const _c763e414 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0288afda,
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
