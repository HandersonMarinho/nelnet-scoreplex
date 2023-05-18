import Vue from 'vue'

import {
  getMatchedComponentsInstances,
  promisify,
  globalHandleError
} from './utils'

import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import _6f6c098b from '../layouts/default.vue'
import _77430317 from '../layouts/empty.vue'

const layouts = { "_default": _6f6c098b,"_empty": _77430317 }

export default {
  head: {"title":"Midobank","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.png"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Montserrat:400,700,200"},{"rel":"stylesheet","href":"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Ffont-awesome\u002Flatest\u002Fcss\u002Ffont-awesome.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Ffont-awesome.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fbootstrap.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fpaper-dashboard.min.css?v=2.0.1"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fsite.css"}],"script":[{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fcore\u002Fjquery.min.js"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fcore\u002Fpopper.min.js"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fcore\u002Fbootstrap.min.js"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fplugins\u002Fperfect-scrollbar.jquery.min.js"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fplugins\u002Fmoment.min.js"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fplugins\u002Fsweetalert.min.js"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fplugins\u002Fjquery.validate.min.js"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fplugins\u002Fjquery.dataTables.min.js"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fpaper-dashboard.min.js?v=2.0.1"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fplugins\u002Fjquery.mark.min.js"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fplugins\u002Fchartjs.min.js"},{"type":"text\u002Fjavascript","src":"\u002Fassets\u002Fjs\u002Fplugins\u002Fhighcharts\u002Fhighcharts.js"}],"style":[]},

  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      h(NuxtBuildIndicator),
      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: ''
  }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    }
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail()
        }
        if (this.$loading.finish) {
          this.$loading.finish()
        }
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },

  components: {
    NuxtLoading
  }
}
