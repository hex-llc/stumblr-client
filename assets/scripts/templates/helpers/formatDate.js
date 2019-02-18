'use strict'

const moment = require('moment')

const formatDate = (date) => {
  return moment(date).format('lll')
}

module.exports = formatDate
