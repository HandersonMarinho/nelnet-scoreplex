import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d909dcd0 = () => interopDefault(import('../pages/default.vue' /* webpackChunkName: "pages/default" */))
const _24b8a7cd = () => interopDefault(import('../pages/handerson.vue' /* webpackChunkName: "pages/handerson" */))
const _8f74112e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/default",
    component: _d909dcd0,
    name: "default"
  }, {
    path: "/handerson",
    component: _24b8a7cd,
    name: "handerson"
  }, {
    path: "/",
    component: _8f74112e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
