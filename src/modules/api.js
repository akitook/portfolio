// build前にflamelinkから情報取得,assetsにjsonを出力
module.exports = function generateModule(moduleOptions) {
  const admin = require('firebase-admin')
  const flamelink = require('flamelink')
  const serviceAccount = require('../config/firebaseAdminServiceKey')

  const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount), // required
    databaseURL: process.env.FLAMELINK_DB_URL, // required
    storageBucket:
      process.env.FLAMELINK_STORAGE_BUCKET
  }
  const firebaseApp = admin.initializeApp(firebaseConfig)

  const app = flamelink({ firebaseApp, dbType: 'cf' })
  this.nuxt.hook('build:before', async ({ isStatic, isDev }) => {
    // 全データを取得
    let posts = {}
    try {
      const fetchPosts = await app.content.get({
        schemaKey: 'project',
        populate: true
      })
      // date順にソート
      Object.keys(fetchPosts).sort((a, b) => {
        return fetchPosts[a]["date"] < fetchPosts[b]["date"] ? 1 : -1
      }).forEach((key, index) => {
        posts[key] = fetchPosts[key]
      })
    } catch(error) {
      console.log(error)
      posts = {}
    }
    const outputPath = '/static/json/project.json'
    // JSONを生成
    this.options.build.plugins.push({
      apply(compiler) {
        compiler.plugin('emit', (compilation, cb) => {
          compilation.assets['json/project.json'] = {
            source: () => JSON.stringify(posts),
            size: () => {}
          }
          cb()
        })
      }
    })

    // link rel="prefetch"にJSONを追加
    const url = this.options.dev ? '' : process.env.BASE_URL
    this.options.head.link = [
      ...this.options.head.link,
      { rel: 'prefetch' },
      { href: `${url}/json/project.json` }
    ]

    if (this.options.dev) return

    // ルート生成
    this.options.generate.routes = Object.keys(posts).map(key => `${posts[key].category}/${posts[key].id}`)
  })
}
