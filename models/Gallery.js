const keystone = require('keystone')
const { Types } = keystone.Field

const Gallery = new keystone.List('Gallery', {
  autokey: { from: 'name', path: 'key', unique: true, fixed: true },
  searchFields: 'name description',
  defaultSort: '-createdAt',
  defaultColumns: 'name, library, createdAt, state',
  // TODO: Ask Jen about sorting
  track: true,
})

Gallery.add(
  {
    name: {
      type: String,
      required: true,
    },
    library: {
      // TODO: make this a proper relationship, for (maybe) more organization in admin ui
      type: Types.Select,
      options: 'pinturas, fotografias, desenhos',
      index: true,
      required: true,
      noedit: true,
      initial: true,
    },
    description: {
      type: Types.Html,
      wysiwyg: true,
      height: 75,
    },
    images: {
      type: Types.CloudinaryImages,
    },
  },
  'Admin',
  {
    state: {
      type: Types.Select,
      options: 'draft, published, archived',
      default: 'draft',
      index: true,
    },
  },
)

Gallery.register()
