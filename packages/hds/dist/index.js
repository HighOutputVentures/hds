
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds.cjs.production.min.js')
} else {
  module.exports = require('./hds.cjs.development.js')
}
