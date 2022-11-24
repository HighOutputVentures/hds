
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-checkbox-group.cjs.production.min.js')
} else {
  module.exports = require('./hds-checkbox-group.cjs.development.js')
}
