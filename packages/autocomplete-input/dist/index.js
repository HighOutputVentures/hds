
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-autocomplete-input.cjs.production.min.js')
} else {
  module.exports = require('./hds-autocomplete-input.cjs.development.js')
}
