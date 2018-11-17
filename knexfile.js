const path = require('path')

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
  }
}