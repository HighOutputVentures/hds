
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-auto-form.cjs.production.min.js')
} else {
  module.exports = require('./hds-auto-form.cjs.development.js')
}
