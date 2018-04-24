//Requires my db with pgp
const db = require('../config/connection');

//Model to create event
createEvent = (event) => {
    const queryPromise = db.one(`
    INSERT INTO events (event_name, host_id, calendar_date, date_time, location, description)
    VALUES ($/event_name/, $/host_id/, $/calendar_date/, $/date_time/, $/location/, $/description/)
    RETURNING *
    `, event
  );
  return queryPromise;
};

//Not currently using, but grabs allEvents
function getAllEvents() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM events;
    `);
  return queryPromise
}

//Trying to grab all hosted events for a given user
function getEventsForUser(id) {
  console.log('model time');
  console.log(id);
  const queryPromise = db.manyOrNone(`
    SELECT users.name AS Host, events.event_name, events.calendar_date AS Date, events.date_time AS Time, events.location, events.description
    FROM users
    JOIN events
    ON users.id = events.host_id
    WHERE users.id = $/id/ `, events
    );
  return queryPromise
}

module.exports = {
  createEvent,
  getAllEvents,
  getEventsForUser
}



