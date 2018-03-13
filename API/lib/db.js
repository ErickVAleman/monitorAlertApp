'use strict'

const Sequelize = require('sequelize')

module.exports = function setupMSSQL (config) {
  const sequelize = new Sequelize(config)

  return sequelize
}
