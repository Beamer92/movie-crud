// Add the env, config, and connection variables bellow using the knexfile.js
const env = process.env.NODE_ENV || 'development'

const config = require('../knexfile')[env]

const connection = require('knex')(config)

module.exports = connection
