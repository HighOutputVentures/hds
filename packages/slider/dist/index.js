
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-slider.cjs.production.min.js')
} else {
  module.exports = require('./hds-slider.cjs.development.js')
}
