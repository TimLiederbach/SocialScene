const db = require('../config/connection');

function getAllEvents() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM events;
    `);
  return queryPromise
}

module.exports = {
  getAllEvents
}

    // SELECT event_name, calendar_date, date_time, location, description, users.name, users.email, users.phone
    // FROM events
    // JOIN users
    // ON users.id = events.host_id
