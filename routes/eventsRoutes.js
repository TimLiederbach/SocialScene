const eventsRouter = require('express').Router();
const eventsController = require('../controllers/events/events-controller');
const eventsViewController = require('../controllers/events/eventsViewController')

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status:'error',
    message: err.message
  })
}

eventsRouter.route('/')
  .get(eventsController.getAll, eventsViewController.displayEvents, sendError)

module.exports = eventsRouter;
