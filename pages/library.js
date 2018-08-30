import { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import GalleryList from '../components/GalleryList'

export default class LibraryPage extends Component {
  static propTypes = {
    library: PropTypes.any,
  }
  static async getInitialProps({ query }) {
    const library = {
      name: query.library,
      galleries: (await axios.get(
        `http://localhost:3000/api/galleries?library=${query.library}`,
      )).data,
    }
    return { library }
  }
  render() {
    return (
      <main>
        <header className="themed">
          <h1>{capitalize(this.props.library.name)}</h1>
          <em>{this.props.library.galleries.length} galerias</em>
          <p>Possible blurb here</p>
        </header>
        <section>
          <GalleryList library={this.props.library} />
        </section>
        <style jsx>{`
          header {
            max-width: 38em;
            margin: auto;
            padding: 0 13px;
          }
          em {
            float: right;
          }
          section {
            padding: 0 13px;
          }
        `}</style>
      </main>
    )
  }
}

function capitalize(str) {
  return str[0] ? str[0].toUpperCase() + str.slice(1) : str
}