const keystone = require('keystone')
const { Types } = keystone.Field

const Enquiry = new keystone.List('Enquiry', {
  nocreate: true,
})
Enquiry.add({
  name: { type: Types.Name, required: true },
  email: { type: Types.Email, required: true },
  phone: { type: String },
  // TODO: Ask Jen about having some kind of "Enquiry type"
  message: { type: Types.Textarea, required: true },
})
Enquiry.track = true
Enquiry.defaultSort = '-createdAt'
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt'
Enquiry.register()
