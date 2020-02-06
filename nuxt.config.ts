export default {
  mode: 'universal',
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/stylesheets/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP']
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /*
    extend (config, ctx) {}
     */
  },
  buildModules: ['@nuxt/typescript-build'],
  styleResources: {
    scss: [
      '~/assets/stylesheets/foundation/variables.scss',
      '~/assets/stylesheets/foundation/colors.scss'
    ]
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  }
}
