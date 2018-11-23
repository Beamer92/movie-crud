const path = require('path')
const herokuDB = require('./pgkeys.js')

module.exports = {
  // add the development config object here
  // include a migrations and seeds directories
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/movie_crud_dev',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  production: {
    client: 'pg',
    connection: herokuDB,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}
