import { Component } from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'

export default class GallerySlideshow extends Component {
  static propTypes = {
    gallery: PropTypes.object,
  }
  render() {
    const items = this.props.gallery.images.map(image => {
      return {
        original: image.url,
        thumbnail: image.url,
      }
    })
    return (
      <div>
        <ImageGallery
          items={items}
          lazyLoad={true}
          showBullets={true}
          showIndex={true}
          useTranslate3D={false}
        />
        <style jsx global>{`
          @import '../node_modules/react-image-gallery/styles/scss/image-gallery';
          .image-gallery {
            width: 100%;
            .image-gallery-slide {
              background: none;
            }
            .image-gallery-content .image-gallery-image img {
              object-fit: contain;
              width: 100%;
            }
            .image-gallery-content:not(.fullscreen) .image-gallery-image img {
              height: 320px;
              min-height: 60vh;
              max-height: 75vh;
            }
            .image-gallery-content.fullscreen .image-gallery-image img {
              height: 75vh;
            }
          }
        `}</style>
      </div>
    )
  }
}
