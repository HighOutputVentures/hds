
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hds-forms.cjs.production.min.js')
} else {
  module.exports = require('./hds-forms.cjs.development.js')
}
