require('dotenv').config()

const next = require('next')
const keystone = require('keystone')
const nextRoutes = require('./next-routes')
const keystoneRoutes = require('./keystone-routes')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })

keystone.init({
  name: 'Jenfs Website',
  brand: 'Jenfs',
  'auto update': true,
  session: true,
  auth: true,
  'user model': 'User',
})
keystone.import('models')
keystone.set('nav', {
  galleries: 'galleries',
  enquiries: 'enquiries',
  users: 'users',
})
keystone.set('routes', keystoneApp => {
  keystoneRoutes(keystoneApp)
  keystoneApp.get('*', nextRoutes.getRequestHandler(nextApp))
})

nextApp.prepare().then(() => {
  keystone.start()
})
