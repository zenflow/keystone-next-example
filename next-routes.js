const nextRoutes = require('next-routes')

module.exports = nextRoutes()
  .add('index', '/') // TODO: feature request for .redirect()
  .add('home', '/home')
  .add('library', '/:library(desenhos|fotografias|pinturas)')
  .add('gallery', '/:library(desenhos|fotografias|pinturas)/:gallery')
