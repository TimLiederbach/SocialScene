//Importing bcrypt to compare passwords and hash
const bcrypt = require('bcrypt');

//Import User model functions, allowing us to create User database and retrieve user from database
const UserDb = require("../../models/users");

//Import Event model functions
const EventDb = require('../../models/events');

function login(req, res, next) {
    let user;
    const loginAttempt = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
      }
  UserDb.findUser(loginAttempt.name)
    .then(userInfo => {
      user = userInfo
      return bcrypt.compareSync(loginAttempt.password, user.password_digest)
    })
    .then(isValidPass => {
        if (!isValidPass) {
            throw {
            message: 'Wrong log-in submission'
            }
        }
        console.log(user)
        req.session.user = user;
        next();
    })
    .catch(err => {
      next(err);
    })
}

function register(req, res, next) {
  const salt = parseInt(process.env.SALT)
  const hash = bcrypt.hashSync(req.body.password, salt)
  const user = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password_digest: hash
  }
  UserDb.createUser(user)
    .then(user => {
      if (!user) {
        throw {
          message: 'Incorrect password'
        }
      }
      req.session.user = user;
      next();
    })
    .catch(err => {
      next(err);
    })
}




module.exports = {
  login,
  register,
  loginRequired: [
  //Confused about this loginRequired bit; not sure exactly what it does with session
    /* this is either going to resolve to next(false) or next(null) */
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ]
}
