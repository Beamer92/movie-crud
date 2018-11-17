const knex = require('../../db')

function checkMovie(movieId) {
    const errors = []
    
    return knex('movies').where('id', movieId)
    .then(res => {
        if(!res) {
            errors.push('Could not find that Movie')
            return {errors}
        }
        return res
    }) 
}

function getAll(limit) {
    return limit ? knex('movies').limit(limit) : knex('movies')
}

// function getMovie (movieId) {
//     return knex('movies').where('id', movieId)
// }

module.exports = { checkMovie, getAll}