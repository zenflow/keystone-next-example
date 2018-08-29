import { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

export default class GalleryList extends Component {
  static propTypes = {
    library: PropTypes.string,
    galleries: PropTypes.array,
  }
  render() {
    return (
      <div className="container">
        {this.props.galleries.map((gallery, index) => (
          <Link
            key={index}
            href={`/${this.props.library}/gallery?key=${gallery.key}`}
          >
            <a className="gallery themed">
              <div>
                <h5>{gallery.name}</h5>
                <span>{gallery.imageCount} imagens</span>
              </div>
              <img src={gallery.firstImageUrl} />
            </a>
          </Link>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 160px);
            grid-auto-rows: 160px;
            justify-content: center;
          }
          .container > .gallery {
            position: relative;
          }
          .container > .gallery > div {
            position: absolute;
            padding: 8px;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.9);
          }
          .container > .gallery > img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 16px;
            object-fit: cover;
          }
        `}</style>
      </div>
    )
  }
}