import { Component } from 'react'
import { Link } from '../next-routes'
import PropTypes from 'prop-types'

export default class GalleryList extends Component {
  static propTypes = {
    library: PropTypes.any,
  }
  render() {
    return (
      <div className="container">
        {this.props.library.galleries.map((gallery, index) => (
          <Link
            key={index}
            route={`/${this.props.library.name}/${gallery.key}`}
          >
            <a className="themed">
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
            & > a {
              position: relative;
              & > div {
                position: absolute;
                padding: 8px;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.9);
              }
              & > img {
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 16px;
                object-fit: cover;
              }
            }
          }
        `}</style>
      </div>
    )
  }
}
