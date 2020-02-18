const projects = require('./src/assets/json/projects.json')
const projectsKey = Object.keys(projects)
const projectArray = projectsKey.map(k => projects[k])
export default {
  mode: 'spa',
  srcDir: 'src/',
  generate: {
    routes() {
      return projectArray.map(project => {
        return `${project.category}/${project.id}`
      })
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Akito Okubo | 大久保 明翔',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "I'm a front-end engineer / web designer working in Kanazawa."
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://akitookubo.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Akito Okubo | 大久保 明翔'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "I'm a front-end engineer / web designer working in Kanazawa."
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://akitookubo.com/ogp.jpg'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon-180x180.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-chrome-192x192.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#eee' },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css', '~/assets/stylesheets/main.scss'],
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
    extend(
      config: { module: { rules: { test: RegExp; use: string[] }[] } },
      ctx: any
    ) {
      if (!!config.module) {
        config.module.rules.push({
          test: /\.(vert|frag)$/i,
          use: ['raw-loader']
        })
      }
    }
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
