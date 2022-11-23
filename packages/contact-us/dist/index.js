
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-contact-us.cjs.production.min.js')
} else {
  module.exports = require('./hds-contact-us.cjs.development.js')
}
