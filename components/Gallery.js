import './Gallery.scss'
import { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import PropTypes from 'prop-types'

export default class Gallery extends Component {
  static propTypes = {
    images: PropTypes.array,
  }
  render() {
    const items = this.props.images.map(image => {
      return {
        original: image.url,
        thumbnail: image.url,
      }
    })
    return (
      <ImageGallery
        items={items}
        lazyLoad={true}
        showBullets={true}
        showIndex={true}
        useTranslate3D={false}
      />
    )
  }
}
