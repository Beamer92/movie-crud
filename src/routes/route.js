const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controller')

//get all
router.get('/', ctrl.getAll)
//get one
router.get('/:id', ctrl.checkMovie, ctrl.getMovie)
//create new movie
// router.post('/', ctrl.createMovie)
// //update movie
// router.put('/:id', ctrl.checkMovie, ctrl.editMovie)
// //delete movie
// router.delete('/:id', ctrl.checkMovie, ctrl.deleteMovie)

module.exports = router