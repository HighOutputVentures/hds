
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-utilities.cjs.production.min.js')
} else {
  module.exports = require('./hds-utilities.cjs.development.js')
}
