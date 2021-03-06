import '../styles/index.scss'
import React from 'react'
import App, { Container } from 'next/app'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import routerEvents from 'next-router-events'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })
routerEvents.on('routeChangeStart', () => NProgress.start())
routerEvents.on('routeChangeComplete', () => NProgress.done())
routerEvents.on('routeChangeError', () => NProgress.done())

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
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Container>
    )
  }
}
