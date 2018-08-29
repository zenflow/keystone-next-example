import { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Gallery from './Gallery'

export default library => {
  return class LibraryPage extends Component {
    static propTypes = {
      gallery: PropTypes.any,
    }
    static async getInitialProps({ query }) {
      // TODO: colocate this data dependency with it's dependent (i.e. GalleryList)
      const gallery = (await axios.get(
        `http://localhost:3000/api/gallery?key=${query.key}`,
      )).data
      return { gallery }
    }
    render() {
      return (
        <main>
          <header className="themed">
            <h1>{this.props.gallery.name}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.gallery.description,
              }}
            />
          </header>
          <section>
            <Gallery images={this.props.gallery.images} />
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
