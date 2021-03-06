//Require db
const bcrypt = require('bcrypt');
const db = require('../config/connection');

//Finds a user, given a name
findUser = (name) =>{
    const queryPromise = db.one(`
        SELECT *
        FROM users
        WHERE  name = $1
        `, name)
    return queryPromise;
};

//Creates a new user
createUser = (user) => {
    const queryPromise = db.one(`
    INSERT INTO users (name, email, phone, password_digest)
    VALUES ($/name/, $/email/, $/phone/, $/password_digest/)
    RETURNING *
    `, user
  );
  return queryPromise;
};

module.exports = {
    findUser,
    createUser
}
