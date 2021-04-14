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
.use(cors())

.use((req, res, next)=>{         
  const token = req.headers.authorization?.split(' ')[1];
  //console.log(req.headers);
  if (token !== null && token !== undefined) {
    req.user = usersModel.FromJWT(token);
    req.token = token;
  }
  
  console.log("token " + token)
  
  next();
}) 

.use('/', userCtrl)
.use('/', LoginRequired, feedCtrl)
.use('/', LoginRequired, friendCtrl)
.use('/', LoginRequired, workoutCtrl)
.use('/', LoginRequired, devCtrl)

.get('*', (req, res) => {
  res.sendFile( path.join( __dirname, '../docs/index.html'));
})

// catch 404 and forward to error handler
.use(function(req, res, next) {
  next(createError(404));
})

// error handler
.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})

module.exports = app;
