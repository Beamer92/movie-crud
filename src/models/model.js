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
    let upString = ''
    if(params.director) upString += `set director = '${params.director}' `
    if(params.poster) upString += `set poster = '${params.poster}' `
    if(params.rating) upString += `set rating = '${params.rating}' `
    if(params.title) upString += `set title = '${params.title}' `
    if(params.year) upString += `set year = '${params.year}'`
    console.log(id)
    console.log(upString)


    return knex.raw(`update movies ${upString} where id=${id}`)
    .then(function(){
        return knex('movies').select('*').where('id', id)
    })


}

module.exports = { checkMovie, getAll, createMovie, deleteMovie, updateMovie}