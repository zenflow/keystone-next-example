import { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

class App extends Component {
  static async getInitialProps() {
    let response = await axios.get('http://localhost:3000/api/posts')
    return { posts: response.data }
  }

  render() {
    return (
      <main>
        <h1>Pinturas</h1>
        <p>Lookie here</p>
        {this.props.posts.map((post, i) => {
          return (
            <div className="post" key={i}>
              <div className="row">
                <div className="col-12 col-md-4">
                  <img className="img-fluid" src={post.image.secure_url} />
                </div>
                <div className="col-12 col-md-8">
                  <h2>{post.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content.brief }}
                  />
                </div>
              </div>
            </div>
          )
        })}
        <style jsx>{`
          main {
            max-width: 38em;
            margin: auto;
            padding: 13px;
          }
        `}</style>
      </main>
    )
  }
}
App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any),
}
export default App
