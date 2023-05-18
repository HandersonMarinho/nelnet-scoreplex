import VueLib from 'vue'
import * as Sentry from '@sentry/browser'
import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

export default function (ctx, inject) {
  const opts = Object.assign({}, {"dsn":"https:\u002F\u002F3ea19735d28f4effa41ea14c5eced845@sentry.io\u002F1817236","environment":"production"}, {
    integrations: [
      new Dedupe({}),
      new ExtraErrorData({}),
      new ReportingObserver({}),
      new RewriteFrames({}),
      new Vue({Vue: VueLib, ...{"attachProps":true}})
    ]
  })

  // Initialize sentry
  Sentry.init(opts)

  // Inject Sentry to the context as $sentry
  inject('sentry', Sentry)
}
