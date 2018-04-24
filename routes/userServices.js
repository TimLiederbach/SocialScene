//Requires event model
const EventDb = require('../models/events');

//function to Create Event: grabs data from req.body, sends as parameter to model
function createEvent(req, res, next) {
  console.log('about to create Event')
  const event = {
    event_name: req.body.event_name,
    host_id: req.session.user.id,
    calendar_date: req.body.calendar_date,
    date_time: req.body.date_time,
    location: req.body.location,
    description: req.body.description
  }
  EventDb.createEvent(event)
    .then(event => {
      console.log('next step')
      next();
    })
    .catch(err => {
      next(err);
    })
}


function getEventsForUser(req, res, next) {
  console.log('about to get events');
  EventDb.getEventsForUser (req.session.user.id)
    .then(data => {
      res.locals.events = data;
      next()
    })
    .catch(err => {
      next(err);
    })
}



module.exports = {
  createEvent,
  getEventsForUser
}
