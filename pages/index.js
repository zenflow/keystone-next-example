import { Component } from 'react'
import { Router } from '../next-routes'

export default class IndexPage extends Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/home',
      })
      res.end()
    } else {
      Router.push('/home')
    }
    return {}
  }
}
