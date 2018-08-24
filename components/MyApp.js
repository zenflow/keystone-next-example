import React from 'react'
import App, { Container } from 'next/app'
import MyNav from '../components/MyNav'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <header>
          <MyNav />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>Made with &lt;3 by Jenfs and Farthero</footer>
      </Container>
    )
  }
}
