import { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Head from 'next/head'
import capitalize from '../helpers/capitalize'
import GallerySlideshow from '../components/GallerySlideshow'
import { Router } from '../next-routes'

export default class GalleryPage extends Component {
  static propTypes = {
    query: PropTypes.object,
    gallery: PropTypes.object,
  }
  static async getInitialProps({ query }) {
    // TODO: handle 404 not found errors
    // TODO: short-circuit redirect here to first image if no image
    const gallery = (await axios.get(
      `http://localhost:3000/api/gallery?key=${query.gallery}`,
    )).data
    return { query, gallery }
  }
  render() {
    const { query, gallery } = this.props
    return (
      <div>
        <Head>
          <title>{`${gallery.name} / ${capitalize(
            query.library,
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
          <pre style={{ color: 'white' }}>{JSON.stringify({}, 0, 2)}</pre>
          <GallerySlideshow
            images={gallery.images}
            startImage={gallery.images.find(
              image => image.public_id === query.image,
            )}
            onSlide={image => {
              Router.replaceRoute('gallery', {
                library: query.library,
                gallery: query.gallery,
                image: image.public_id,
              })
            }}
          />
        </section>
        <style jsx>{`
          header {
            max-width: 38em;
            margin: auto;
            padding: 0 13px;
          }
          section {
            padding: 0 13px;
          }
        `}</style>
      </div>
    )
  }
}
