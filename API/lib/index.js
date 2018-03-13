'use strict'

const setupQuery = require('./setupQuery')

module.exports = async function (config) {
  const setupQ = setupQuery(config)

  return {
    setupQ
  }
}
