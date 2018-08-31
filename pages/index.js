import { Component } from 'react'
import redirect from '../helpers/redirect'

export default class IndexPage extends Component {
  static async getInitialProps({ res }) {
    return redirect(res, '/home')
  }
}
