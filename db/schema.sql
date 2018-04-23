\c socialScene_db


DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
  password_digest VARCHAR(255)
  );

DROP TABLE IF EXISTS events;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event_name VARCHAR(255),
  host_id INTEGER REFERENCES users(id),
  calendar_date VARCHAR(255),
  date_time VARCHAR(255),
  location VARCHAR(255),
  description TEXT
);
