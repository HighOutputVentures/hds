
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-auth.cjs.production.min.js')
} else {
  module.exports = require('./hds-auth.cjs.development.js')
}
