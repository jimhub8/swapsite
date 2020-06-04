import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'http://dellmat.jim/css/all.css' },

      // { rel: 'stylesheet', href: 'http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/css/ui.css' },
      // { rel: 'stylesheet', href: 'http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/css/responsive.css' },

      { rel: 'script', href: 'http://dellmat.jim/js/jquery.js' },
      { rel: 'script', href: 'http://dellmat.jim/js/bootstrap.min.js' },
      { rel: 'script', href: 'http://dellmat.jim/vendor/animsition/js/animsition.min.js' },
      { rel: 'script', href: 'http://dellmat.jim/js/main.min.js' },
      { rel: 'script', href: 'http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/js/bootstrap.bundle.min.js' },
      { rel: 'script', href: 'http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/js/script.js' },



    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/app.scss',
    '~/assets/css/main.css',
    '~/assets/css/all.css',
    '~/assets/css/responsive.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/element-ui.js',
    {src: '~/plugins/instantSearch.js', ssr: false},


  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-material-design-icons',
    '@nuxtjs/auth',

    // '@nuxtjs/bootstrap',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  //  admin.jim/api/auth/login
  // http://admin.jim/api/auth/login
  axios: {
    // baseURL: process.env.API_URL
    baseURL: 'http://admin.jim'
    // baseURL: 'http://swap.jim'
    // baseURL: 'http://seller.swapstore.co.ke'
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/api/auth/login', method: 'post', propertyName: 'access_token' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get', propertyName: false },
  //       },

  //       tokenRequired: true,
  //       tokenType: 'bearer',
  //       globalToken: true,
  //       autoFetchUser: true
  //     }
  //   }
  // },
  auth: {
    strategies: {
      local: {
        endpoints: {
          // login: { url: 'login', method: 'post', propertyName: 'token' },
          // logout: { url: 'logout', method: 'post' },

          login: { url: '/api/auth/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: false },
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    token: {
      prefix: 'access_'
    },
  },

  router: {
    // middleware: ['auth']
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

}
