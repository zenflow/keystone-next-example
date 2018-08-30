import isPathInside from 'is-path-inside'

export default function isPathEqualOrInside(pathA, pathB) {
  return (
    trimTrailingSlash(pathA) === trimTrailingSlash(pathB) ||
    isPathInside(pathA, pathB)
  )
}

function trimTrailingSlash(path) {
  return path[path.length - 1] === '/' ? path.slice(0, path.length - 1) : path
}
