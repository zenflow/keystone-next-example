import { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Gallery from '../../components/Gallery'

export default class GalleryPage extends Component {
  static propTypes = {
    gallery: PropTypes.any,
  }
  static async getInitialProps({ query }) {
    // TODO: handle 404 not found errors
    const gallery = (await axios.get(
      `http://localhost:3000/api/gallery?key=${query.gallery}`,
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
