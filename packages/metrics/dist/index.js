
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-metrics.cjs.production.min.js')
} else {
  module.exports = require('./hds-metrics.cjs.development.js')
}
