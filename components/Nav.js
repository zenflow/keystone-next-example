import { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import { Link } from '../next-routes'
import isPathEqualOrInside from '../helpers/isPathEqualOrInside'

const navItems = [
  ['Home', '/home'],
  ['Pinturas', '/pinturas'],
  ['Fotografias', '/fotografias'],
  ['Desenhos', '/desenhos'],
  ['Curriculo', '/curriculo'],
  ['Contato', '/contato'],
]

class Nav extends Component {
  static propTypes = {
    router: PropTypes.object,
  }
  render() {
    const isCurrentPath = path =>
      isPathEqualOrInside(this.props.router.asPath, path)
    return (
      <nav>
        <div className="logo">
          <Link route="/home">
            <a>
              <img src="/static/logo.svg" alt="Jenfs Logo" />
            </a>
          </Link>
        </div>
        {navItems.map(([title, path]) => (
          <div key={path}>
            <Link route={path}>
              <a className={isCurrentPath(path) && 'current'}>{title}</a>
            </Link>
          </div>
        ))}
        <style jsx>{`
          nav {
            margin: 10px;
            font-size: 1.2em;
          }
          nav > div {
            text-align: center;
            align-self: center;
          }
          @media all and (min-width: 850px) {
            nav {
              display: flex;
            }
            nav > div {
              flex: auto;
            }
          }
          @media all and (max-width: 849px) and (min-width: 550px) {
            nav {
              display: grid;
              grid-template-columns: 3fr 2fr 2fr 2fr;
              grid-template-rows: 50px 50px;
            }
            nav > div.logo {
              grid-row: 1 / span 2;
            }
          }
          @media all and (max-width: 549px) {
            nav {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 50px 35px 35px;
            }
            nav > div.logo {
              grid-column: 1 / span 3;
            }
          }

          a {
            color: white;
            text-decoration: none;
            font-family: Verdana, Geneva, sans-serif;
            &.current {
              border-bottom: 2px solid white;
            }
          }
        `}</style>
      </nav>
    )
  }
}

export default withRouter(Nav)
