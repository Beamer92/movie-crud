const model = require('../models/model.js')

function checkMovie(req,res,next) {
  const id = req.params.id
  console.log(id)
  model.checkMovie(id).then(result => {
    console.log(result)
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
    if(req.movie[0].errors) return next({ status: 404, errors: req.movie[0].errors })
    //HERE, can't get errors to fire this way, find another way
    res.status(200).send(req.movie[0])
}

module.exports = { checkMovie, getAll, getMovie }