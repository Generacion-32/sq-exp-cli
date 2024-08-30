const { getAll, create, getOne, remove, update } = require('../controllers/movies.controllers');
const express = require('express');

const routerMovie = express.Router();

routerMovie.route('/')
  .get(getAll)
  .post(create);

routerMovie.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update);

module.exports = routerMovie;