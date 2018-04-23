//Importing express and 3rd Party modules
require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');

const authRouter = require('./services/auth/AuthRouter')

//Invoking express for use through app constant
const app = express();
//Establishing a port, for now 3000
const PORT = process.env.PORT || 3000;

//Set-up Routers
// const usersRouter = require('./routes/usersRoutes')
const eventsRouter = require('./routes/eventsRoutes');

//Set-up paths for views and public folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

//Enables morgan to log activity on the server
app.use(logger('dev'));
//Not sure what this does???

//Using .env file to set server_secret
app.set('server_secret', process.env.SERVER_SECRET);

//Enables a session for users utilizing SERVER_SECRET key
app.use(session({
  secret:            app.get('server_secret'),
  resave:            false,
  saveUninitialized: false,
}));

//Allows incoming url-formatted body content to be parsed and ingested by our database
app.use(bodyParser.urlencoded({extended:false}));
//Allows incoming json to be parsed
app.use(bodyParser.json());
//Not sure what this does???
app.use(methodOverride('_method'));

// app.use('/auth', authRouter);
//Establishing different routes
app.use('/auth', authRouter);
app.use('/events', eventsRouter);


app.get('/', (req, res) => {
  console.log('Getting your homepage')
    res.render('index');
})

//App sends json object for unrecognized routes
app.use("*", (err,req, res, next) => {
    res.status(400).json({
      error: err,
      message: err.message
    })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});









