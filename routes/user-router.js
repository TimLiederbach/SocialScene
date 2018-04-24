const userRouter = require('express').Router();
const AuthServices = require('../services/auth/AuthServices');
const userViewController = require('../controllers/users/usersViewController');
const userServices = require('./userServices');

userRouter.get('/profile', AuthServices.loginRequired, userServices.getEventsForUser, (req, res) => {
    res.render('users/profile');
  });

userRouter.get('/event', AuthServices.loginRequired, (req, res) => {
    res.render('users/event');
  });

userRouter.post('/event', userServices.createEvent, userViewController.handleUserProfile);


//Handles CRUD of events
// authRouter.get('/event', usersViewController.displayEvent)
// authRouter.post('/event', AuthServices.updateEvent, usersViewController.displayEvent)
// authRouter.put('/event', AuthServices.createEvent, usersViewController.displayEvent)
// authRouter.destroy('/event', AuthServices.deleteEvent, usersViewController.displayEvent)

userRouter.use((err, req, res, next) => {
    console.error(err);
    res.json({ error: err });
  });

  module.exports = userRouter;
