import { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import GalleryList from './GalleryList'

export default library => {
  return class CreateLibraryPage extends Component {
    static propTypes = {
      galleries: PropTypes.array,
    }
    static async getInitialProps() {
      // TODO: colocate this data dependency with it's dependent (i.e. GalleryList)
      const galleries = (await axios.get(
        `http://localhost:3000/api/galleries?library=${library}`,
      )).data
      return { galleries }
    }
    render() {
      return (
        <main>
          <header className="themed">
            <h1>{capitalize(library)}</h1>
            <em>{this.props.galleries.length} galerias</em>
            <p>Possible blurb here</p>
          </header>
          <section>
            <GalleryList library={library} galleries={this.props.galleries} />
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
}

function capitalize(str) {
  return str[0] ? str[0].toUpperCase() + str.slice(1) : str
}
