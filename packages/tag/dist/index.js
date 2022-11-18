
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-tag.cjs.production.min.js')
} else {
  module.exports = require('./hds-tag.cjs.development.js')
}
