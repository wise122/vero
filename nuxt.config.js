
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: 'spa',
  ssr: true,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Mitrapabrik',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mitra Pabrik Official Website. Integrating design and materials. ' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/gilroy-bold' },
      { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/gilroy-light' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inria+Sans:wght@300;400;700&display=swap', 
        as: 'style',
        crossorigin: true
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    // BASE_BACKOFFICE_URL:'http://localhost:7000',
    // BASE_BACKEND_URL:'http://localhost:4000',
    // API_URL:'http://localhost:4000/api',

    API_URL:'https://api.mitrapabrik.com/api',
    BASE_BACKOFFICE_URL:'https://admin.mitrapabrik.com',
    BASE_BACKEND_URL:'https://api.mitrapabrik.com',

    BASE_FTP_URL:'https://mitrapabrik.sgp1.digitaloceanspaces.com',
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main-theme.scss'
  ],
  bootstrapVue: {
    icons: true
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/decodeHTML.js',
    '~/plugins/formatIDDate.js',
    '~/plugins/timeAgo.js',
    { src: '~/plugins/vue-gtag.js', mode: 'client' },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */

  // markdownit: {
  //   // preset: 'zero',
  //   // enable_rules:['bold','italic'],
  //   html: false,
  //   linkify: false,
  //   typographer: false,
  //   // breaks: true,
  //   runtime: false,
  // },

  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/markdownit',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL: 'http://localhost:4000/api'
    baseURL: 'https://api.mitrapabrik.com/api'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  loading: false
}
