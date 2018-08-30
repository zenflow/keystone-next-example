const keystone = require('keystone')

module.exports = keystoneApp => {
  keystoneApp.get('/api/galleries', (req, res, next) => {
    const Gallery = keystone.list('Gallery')
    Gallery.model
      .find()
      .where('state', 'published')
      .where('library', req.query.library)
      .select('key name images') // TODO: optimization: only the first image is required
      .sort('-createdAt')
      .exec(function(error, galleries) {
        if (error) {
          return next(error)
        }
        res.json(
          galleries.map(gallery => ({
            key: gallery.key,
            name: gallery.name,
            imageCount: gallery.images.length,
            firstImageUrl: gallery.images[0] && gallery.images[0].url,
          })),
        )
      })
  })
  keystoneApp.get('/api/gallery', (req, res, next) => {
    const Gallery = keystone.list('Gallery')
    Gallery.model
      .findOne()
      .where('state', 'published')
      .where('key', req.query.key)
      .select('name description images')
      .exec(function(error, gallery) {
        if (error) {
          return next(error)
        }
        if (!gallery) {
          return res.status(404).json({ code: 404 })
        }
        res.json({
          name: gallery.name,
          description: gallery.description,
          images: gallery.images,
        })
      })
  })
}
