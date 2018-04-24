const db = require('../config/connection');

createEvent = (event) => {
    const queryPromise = db.one(`
    INSERT INTO events (event_name, host_id, calendar_date, date_time, location, description)
    VALUES ($/event_name/, $/host_id/, $/calendar_date/, $/date_time/, $/location/, $/description/)
    RETURNING *
    `, event
  );
  return queryPromise;
};

function getAllEvents() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM events;
    `);
  return queryPromise
}

function getEventsForUser(events) {
  console.log('model time');
  console.log(data);
  const queryPromise = db.manyOrNone(`
    SELECT users.name AS Host, events.event_name, events.calendar_date AS Date, events.date_time AS Time, events.location, events.description
    FROM users
    JOIN events
    ON users.id = events.host_id
    WHERE users.id = $/events/ `, events
    );
  return queryPromise
}

module.exports = {
  createEvent,
  getAllEvents,
  getEventsForUser
}



