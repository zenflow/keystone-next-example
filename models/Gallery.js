const keystone = require('keystone')
const { Types } = keystone.Field

const Gallery = new keystone.List('Gallery', {
  autokey: { from: 'name', path: 'key', unique: true },
  track: true,
  defaultSort: '-createdAt',
  defaultColumns: 'name, createdAt',
  // TODO: Ask Jen about sorting
})

Gallery.add({
  name: { type: String, required: true, noedit: true },
  description: { type: Types.Html, wysiwyg: true, height: 75 },
  // library: { type: Types.Relationship, ref: 'Library' },
  images: { type: Types.CloudinaryImages },
  state: {
    type: Types.Select,
    options: 'draft, published, archived',
    default: 'draft',
    index: true,
  },
})

Gallery.register()
