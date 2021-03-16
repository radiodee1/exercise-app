var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
require('promise');
require('dotenv').config({ path: __dirname + "/../client/.env"});



var feedCtrl = require('./controllers/feed')
var friendCtrl = require('./controllers/friends')
var userCtrl = require('./controllers/users')
var workoutCtrl = require('./controllers/workouts')

var app = express();

//console.log(process.env);

app.listen( (+ process.env.VUE_APP_BACKEND_PORT) || 3010);

//app.listen(3010);
//app.listen(process.env.VUE_APP_BACKEND_PORT );

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

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

//app.use('/', indexRouterGet);
/*
app.use('/users', usersRouterGet);
app.use('/users', usersRouterPost);
app.use('/users/friends', usersRouterFriendGet);

app.use('/feed', feedRouterGet); 
app.use('/feed', feedRouterPost);
app.use('/feed/user', feedRouterGetUser);
app.use('/feed/friend', feedRouterGetFriend);
app.use('/feed', feedRouterDelete);

app.use('/friends', friendRouterGet);
app.use('/friends', friendRouterPost);
app.use('/friends', friendRouterPatch);

app.use('/workout', workoutRouterGet);
*/

app.use('/',userCtrl);
//app.use(feedCtrl)
//app.use( friendCtrl)
//app.use('/workout',workoutCtrl)



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
