
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-avatar.cjs.production.min.js')
} else {
  module.exports = require('./hds-avatar.cjs.development.js')
}
