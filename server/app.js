var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
require('promise');
const cors = require('cors');
require('dotenv').config({ path: __dirname + "/../client/.env"});

const { LoginRequired  } = require('./controllers/security');
const usersModel = require('./models/users');

var feedCtrl = require('./controllers/feed');
var friendCtrl = require('./controllers/friends');
var userCtrl = require('./controllers/users');
var workoutCtrl = require('./controllers/workouts');
var devCtrl = require('./controllers/dev');

var app = express();

//console.log(process.env);

const assigned_port = process.env.PORT;

//console.log(assigned_port + " <----");

const using_heroku = "production" == process.env.NODE_ENV;

if( ! using_heroku ) {
  app.listen(assigned_port); 
}
else {
  //app.listen(8080); // <----- remove for heroku???
}
const host_port = '*' ;

/*
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', host_port);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('../docs'))
app.use(cors())

app.use((req, res, next)=>{         
  const token = req.headers.authorization?.split(' ')[1];
  //console.log(req.headers);
  req.user = token && usersModel.FromJWT(token);
  next();
}) 

app.use('/', userCtrl);
app.use('/', LoginRequired, feedCtrl);
app.use('/', LoginRequired, friendCtrl);
app.use('/', LoginRequired, workoutCtrl);
app.use('/', LoginRequired, devCtrl);

app.get('*', (req, res) => {
  res.sendFile( path.join( __dirname, '../docs/index.html'));
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
