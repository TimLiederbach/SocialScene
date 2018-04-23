const authRouter = require('express').Router();
const AuthServices = require('../auth/AuthServices');
const usersViewController  = require("../../controllers/users/usersViewController");

//Manages user login
authRouter.get('/login', usersViewController.displayLoginForm)
authRouter.post('/login', AuthServices.login, usersViewController.handleUserProfile)

//Registers new user
authRouter.get('/register', usersViewController.displayRegisterForm)
authRouter.post('/register',AuthServices.register, usersViewController.handleUserProfile)

//Handles CRUD of events
// authRouter.get('/event', usersViewController.displayEvent)
// authRouter.post('/event', AuthServices.updateEvent, usersViewController.displayEvent)
// authRouter.put('/event', AuthServices.createEvent, usersViewController.displayEvent)
// authRouter.destroy('/event', AuthServices.deleteEvent, usersViewController.displayEvent)

//Sets up error handler for authRouter issues
authRouter.use((err, req, res, next) => {
    console.error(err);
    res.json({ error: err });
  });

  module.exports = authRouter;
