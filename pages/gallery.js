import { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Head from 'next/head'
import capitalize from '../helpers/capitalize'
import GallerySlideshow from '../components/GallerySlideshow'
import { Router } from '../next-routes'
import redirect from '../helpers/redirect'

export default class GalleryPage extends Component {
  static propTypes = {
    query: PropTypes.object,
    gallery: PropTypes.object,
  }
  static async getInitialProps({ res, query }) {
    // TODO: handle 404 not found errors
    const gallery = (await axios.get(
      `http://localhost:3000/api/gallery?key=${query.gallery}`,
    )).data
    if (!query.image) {
      return redirect(
        res,
        `/${query.library}/${query.gallery}/${gallery.images[0].public_id}`,
      )
    }
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
          <GallerySlideshow
            images={gallery.images}
            startImage={gallery.images.find(
              image => image.public_id === query.image,
            )}
            onSlide={image => {
              Router.replaceRoute('gallery', {
                ...query,
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
