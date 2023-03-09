const express = require('express');

const Route = express.Router();

const getAdController = require('../controllers/getAdController');
const postAdController = require('../controllers/postAdController');
const editAdController = require('../controllers/editAdController');
const verifyJwt = require('../middlewares/verifyJwt');
const deleteAdController = require('../controllers/deleteAdController');
const searchController = require('../controllers/searchController');

Route.route('/').post(verifyJwt, postAdController);
Route.route('/search').get(searchController);
Route.route('/:id')
    .get(verifyJwt, getAdController) // maybe jwt not reuired here
    .put(verifyJwt, editAdController)
    .delete(verifyJwt, deleteAdController);
module.exports = Route;
