
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-icons.cjs.production.min.js')
} else {
  module.exports = require('./hds-icons.cjs.development.js')
}
