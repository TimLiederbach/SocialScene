const eventsDb = require('../../models/events');

function getAll(req, res, next) {
  console.log('Going to query the Social Scene DB');
  eventsDb.getAllEvents()
    .then(data => {
      console.log('Query complete, and got' + data.length + 'events');
      res.locals.events = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

module.exports = {
  getAll
}
