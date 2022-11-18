
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-pagination.cjs.production.min.js')
} else {
  module.exports = require('./hds-pagination.cjs.development.js')
}
