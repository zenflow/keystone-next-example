const nextRoutes = require('next-routes')

module.exports = nextRoutes()
  .add('index', '/')
  .add('home')
  .add('library', '/:library(desenhos|fotografias|pinturas)')
  .add('gallery', '/:library(desenhos|fotografias|pinturas)/:gallery')
