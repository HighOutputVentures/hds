
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-spinner.cjs.production.min.js')
} else {
  module.exports = require('./hds-spinner.cjs.development.js')
}
