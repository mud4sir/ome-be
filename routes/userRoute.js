const express = require('express');
const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController');

const Route = express.Router();

Route.post('/signup', signupController);
Route.post('/login', loginController);

module.exports = Route;
