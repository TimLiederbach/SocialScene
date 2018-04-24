//Require pg-promise module and connection to my db
const pgp = require('pg-promise')();
const config = require('./dbConfig');

//Enable db queries to be wrapped in promises
const db = pgp(config);

//Export configuration
module.exports = db;
