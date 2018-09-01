const nextRoutes = require('next-routes')

module.exports = nextRoutes()
  .add('index', '/')
  .add('home', '/home')
  .add('library', '/:library(desenhos|fotografias|pinturas)')
  .add('gallery', '/:library(desenhos|fotografias|pinturas)/:gallery/:image?')

if (process.browser) {
  window.routes = module.exports
}
