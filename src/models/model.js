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

function createMovie(movie) {
    return knex('movies')
    .insert({
        director: movie.director,
        poster: movie.poster,
        rating: movie.rating,
        title: movie.title,
        year: movie.year
    })
}

function deleteMovie(id){
    return knex.raw(`delete from movies where id=${id}`).then(function(){
        return {result: "Deleted!"}
    })
}

function updateMovie(id, params){
    let upString = 'set '
    if(params.director) upString += `director = '${params.director}',`
    if(params.poster) upString += `poster = '${params.poster}',`
    if(params.rating) upString += `rating = '${params.rating}',`
    if(params.title) upString += `title = '${params.title}',`
    if(params.year) upString += `year = '${params.year}'`
   
    if(upString[upString.length -1] === ',') upString = upString.substring(0, upString.length -1)

    return knex.raw(`update movies ${upString} where id=${id}`)
    .then(function(){
        return knex('movies').select('*').where('id', id)
    })
}

module.exports = { checkMovie, getAll, createMovie, deleteMovie, updateMovie}