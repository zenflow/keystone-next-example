import { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Head from 'next/head'
import capitalize from '../helpers/capitalize'
import GallerySlideshow from '../components/GallerySlideshow'

export default class GalleryPage extends Component {
  static propTypes = {
    gallery: PropTypes.object,
    libraryName: PropTypes.string,
  }
  static async getInitialProps({ query }) {
    // TODO: handle 404 not found errors
    const gallery = (await axios.get(
      `http://localhost:3000/api/gallery?key=${query.gallery}`,
    )).data
    const libraryName = query.library
    return { gallery, libraryName }
  }
  render() {
    const { gallery, libraryName } = this.props
    return (
      <div>
        <Head>
          <title>{`${gallery.name} / ${capitalize(
            libraryName,
          )} / Jenfs`}</title>
        </Head>
        <header className="themed">
          <h1>{gallery.name}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: gallery.description,
            }}
          />
        </header>
        <section>
          <GallerySlideshow gallery={gallery} />
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
      </div>
    )
  }
}
