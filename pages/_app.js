import '../styles/global.scss'
import MyApp from '../components/MyApp'
import routerEvents from 'next-router-events'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })
routerEvents.on('routeChangeStart', () => NProgress.start())
routerEvents.on('routeChangeComplete', () => NProgress.done())
routerEvents.on('routeChangeError', () => NProgress.done())

export default MyApp
