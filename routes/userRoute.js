const express = require("express");
// const authController = require('../controller/authController');

const {
  getUsers,
  createUser,
  getUser,
  //   deleteUser,
  //   updateUser,
} = require("../controllers/userController");

const Route = express.Router();

// Route.post('/signup', authController.signUp);
// Route.post('/login', authController.login);

Route.route("/").get(getUsers).post(createUser);

// Route.route('/:id').get(getUser).delete(deleteUser).put(updateUser);

module.exports = Route;
