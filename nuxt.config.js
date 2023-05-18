const env = require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

export default {

    head: {
        title: 'Midobank',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200' },
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css' },
            { rel: 'stylesheet', href: '/assets/css/font-awesome.css' },
            { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/assets/css/paper-dashboard.min.css?v=2.0.1' },
            { rel: 'stylesheet', href: '/assets/css/site.css' }
        ],
        script: [
            { type: "text/javascript", src: "/assets/js/core/jquery.min.js" },
            { type: "text/javascript", src: "/assets/js/core/popper.min.js" },
            { type: "text/javascript", src: "/assets/js/core/bootstrap.min.js" },
            { type: "text/javascript", src: "/assets/js/plugins/perfect-scrollbar.jquery.min.js" },
            { type: "text/javascript", src: "/assets/js/plugins/moment.min.js" },
            { type: "text/javascript", src: "/assets/js/plugins/sweetalert.min.js" },
            { type: "text/javascript", src: "/assets/js/plugins/jquery.validate.min.js" },
            { type: "text/javascript", src: "/assets/js/plugins/jquery.dataTables.min.js" },
            { type: "text/javascript", src: "/assets/js/paper-dashboard.min.js?v=2.0.1" },
            { type: "text/javascript", src: "/assets/js/plugins/jquery.mark.min.js" },
            { type: "text/javascript", src: "/assets/js/plugins/chartjs.min.js" },
            { type: "text/javascript", src: "/assets/js/plugins/highcharts/highcharts.js" }
        ]
    },


    loading: { color: '#EF8157' },

    pageTransition: {
        name: 'page',
        mode: 'out-in',
        beforeEnter(el) {
            //console.log('Navegação aconteceu');
        }
    },

    build: {},

    env: env.parsed,

    // https://github.com/nuxt-community/awesome-nuxt
    modules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/sentry',
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/moment'
    ],

    plugins: [
        '~/plugins/core-helper.js',
        '~/plugins/mask.js'
    ],

    // https://github.com/nuxt-community/dotenv-module
    dotenv: {
        /* module options */
    },

    // https://github.com/nuxt-community/sentry-module
    sentry: {
        dsn: 'https://3ea19735d28f4effa41ea14c5eced845@sentry.io/1817236',
        config: {},
    },

    // https://github.com/nuxt-community/axios-module
    axios: {
        baseURL: process.env.BASE_URL
    },

    // https://github.com/nuxt-community/auth-module
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/login', method: 'post', propertyName: 'accessToken' },
                    user: { url: '/me', method: 'get', propertyName: '' },
                    logout: false
                },
                tokenRequired: true
            }
        },
        redirect: {
            login: '/',
            logout: '/'
        }
    },

}