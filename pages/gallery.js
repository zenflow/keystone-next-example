import './gallery.scss'
import { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'
import Head from 'next/head'
import capitalize from '../helpers/capitalize'

export default class GalleryPage extends Component {
  static propTypes = {
    libraryName: PropTypes.string,
    gallery: PropTypes.object,
  }
  static async getInitialProps({ query }) {
    // TODO: handle 404 not found errors
    const libraryName = query.library
    const gallery = (await axios.get(
      `http://localhost:3000/api/gallery?key=${query.gallery}`,
    )).data
    return { libraryName, gallery }
  }
  render() {
    return (
      <div>
        <Head>
          <title>{`${this.props.gallery.name} / ${capitalize(
            this.props.libraryName,
          )} / Jenfs`}</title>
        </Head>
        <header className="themed">
          <h1>{this.props.gallery.name}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.gallery.description,
            }}
          />
        </header>
        <section>
          <ImageGallery
            items={this.props.gallery.images.map(image => {
              return {
                original: image.url,
                thumbnail: image.url,
              }
            })}
            lazyLoad={true}
            showBullets={true}
            showIndex={true}
            useTranslate3D={false}
          />
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
