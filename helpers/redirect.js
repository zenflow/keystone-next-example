import { Router } from '../next-routes'

export default function redirect(res, path) {
  if (res) {
    res.writeHead(302, {
      Location: path,
    })
    res.end()
  } else {
    Router.pushRoute(path)
  }
  return {}
}
