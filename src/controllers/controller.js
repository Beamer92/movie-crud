const model = require('../models/model.js')

function checkMovie(req,res,next) {
  const id = req.params.id
  model.checkMovie(id).then(result => {
    req.movie = result
    return next()
  })
}

function getAll(req,res,next) {
    const limit = isNaN(req.params.limit) ? 10 : Math.floor(req.params.limit) 
    model.getAll(limit).then(movieList => {
        res.status(200).send({movieList})
    })
}

function getMovie(req,res,next) {
    if(!req.movie) return next({ status: 404, errors: req.movie[0].errors })
    res.status(200).send(req.movie[0])
}

function createMovie(req,res,next) {
    let newMovie = {
        director: req.body.director,
        poster: req.body.poster,
        rating: req.body.rating,
        title: req.body.title,
        year: req.body.year
    }

    model.createMovie(newMovie).then(function(){
        return res.status(201).send(newMovie)
    })
    
}

function deleteMovie(req,res,next){
    model.deleteMovie(req.params.id).then(result => {
        return res.status(202).send(result)
    })
}

function updateMovie(req,res,next){
    let movieParams = {}
    if(req.body.director) movieParams.director = req.body.director
    if(req.body.poster) movieParams.poster = req.body.poster
    if(req.body.rating) movieParams.rating = req.body.rating
    if(req.body.title) movieParams.title = req.body.title
    if(req.body.year) movieParams.year = req.body.year

    model.updateMovie(req.params.id, movieParams).then(result => {
        return res.status(202).send(result)
    })
}

module.exports = { checkMovie, getAll, getMovie, createMovie, deleteMovie, updateMovie }