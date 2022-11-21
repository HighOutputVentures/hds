
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-array-field.cjs.production.min.js')
} else {
  module.exports = require('./hds-array-field.cjs.development.js')
}
