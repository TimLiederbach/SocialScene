const authRouter = require('express').Router();
const AuthServices = require('../auth/AuthServices');
const usersViewController  = require("../../controllers/users/usersViewController");

//Manages user login
authRouter.get('/login', usersViewController.displayLoginForm)
authRouter.post('/login', AuthServices.login, usersViewController.handleUserProfile)

//Registers new user
authRouter.get('/register', usersViewController.displayRegisterForm)
authRouter.post('/register', AuthServices.register, usersViewController.handleUserProfile)

//Sets up error handler for authRouter issues
authRouter.use((err, req, res, next) => {
    console.error(err);
    res.json({ error: err });
  });

  module.exports = authRouter;
