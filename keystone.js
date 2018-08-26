require('dotenv').config()

const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const keystone = require('keystone')
keystone.init({
  name: 'Jenfs Website',
  brand: 'Jenfs',
  'auto update': true,
  session: true,
  auth: true,
  'user model': 'User',
})

// Load every module in this directory
keystone.import('models')

app.prepare().then(() => {
  keystone.set('routes', require('./routes')(app))

  // Configure the navigation bar in Keystone's Admin UI
  keystone.set('nav', {
    galleries: 'galleries',
    enquiries: 'enquiries',
    users: 'users',
  })
  keystone.start()
})
