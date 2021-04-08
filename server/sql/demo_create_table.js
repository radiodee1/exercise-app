var mysql = require('mysql');
require('dotenv').config({path:__dirname+ "/../../client/.env"});

//const config = require('../../mysql-login.js')

//console.log(process.env)

var con = mysql.createConnection({
  'host': process.env.VUE_APP_MYSQL_HOST, 
  'user': process.env.VUE_APP_MYSQL_USER,
  'password': process.env.VUE_APP_MYSQL_PASSWORD,
  'port': process.env.VUE_APP_MYSQL_PORT,
  //host: config.host,
  //user: config.user,
  //port: config.port,
  //password: config.password,
  'database': process.env.VUE_APP_MYSQL_DATABASE
});



con.connect(function (err) {
  if (err) throw err;

  /* 
  profiles: basic user data
  entered in 'sign-up' form
  ----
  id
  firstname (name)
  lastname (name)
  address (info)
  city (info)
  state (info)
  zip (info)
  email (info)
  username (name)
  password (password)
  cookie (for saved logins)
  date (registration date)
  */
  var sql = "CREATE TABLE IF NOT EXISTS profiles (id INT AUTO_INCREMENT PRIMARY KEY, " +
    "firstname VARCHAR(255), lastname VARCHAR(255), " +
    "address VARCHAR(255), city VARCHAR(255), " +
    "state VARCHAR(255), zip VARCHAR(255), " +
    "email VARCHAR(255), username VARCHAR(255), " +
    "password VARCHAR(255), cookie VARCHAR(255) ," + 
    "from_user_id INT, height_inches INT, weight_lbs FLOAT, " +
    "date TIMESTAMP, " +
    "picture LONGBLOB " + 
  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table profiles created");
  });

  /* 
  friends: a table for friend connections
  constructed after user picks frinds, queried for friend suggestions
  ----
  id
  user_id (user)
  friend_user_id (associated friend)
  friend_status (some string constant like 'asked', 'confirmed', 'new', 'waiting' ,etc.)
  date (date of association start)
  */
  var sql = "CREATE TABLE IF NOT EXISTS friends (id INT AUTO_INCREMENT PRIMARY KEY, " +
    "user_id INT, friend_user_id INT, " +
    "friend_status VARCHAR(255), " +
    "date TIMESTAMP " +

    " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table friends created");
  });

  /*
  likes: list of likes from associated friends
  connected with some kind of post
  ----
  id
  post_id (num copied from post id)
  from_user_id (num copied from num id)
  */
  var sql = "CREATE TABLE IF NOT EXISTS likes (id INT AUTO_INCREMENT PRIMARY KEY, " +
    "post_id INT, from_user_id INT " +

    " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table likes created");
  });

  /*
  misc: list of misc data
  user oriented
  ----
  id
  from_user_id (num copied from num id)
  height_inches (user height)
  weight (user weight)
  cookie (login cookie)

  */
  var sql = "CREATE TABLE IF NOT EXISTS  misc (id INT AUTO_INCREMENT PRIMARY KEY, " +
    "from_user_id INT, " +
    "height_inches FLOAT, weight FLOAT, " +
    "cookie VARCHAR(255) " +

    " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table misc created");
  });

  /* 
  feed: recording of single exercise repetition
  entered in some user form
  ----
  id
  complete (a boolean or enumeration for whether an exercise is done)
  from_user_id (the user id of the exerciser)
  visible (string)
  date_now (date)
  show_message (which message to show)
  show_exercise (which message to show)
  show_workout (which message to show)
  picture_large (pic)
  picture_small (pic)
  message (common message area)
  message_obj_from (source id)
  message_obj_to (destination id)
  message_obj_message (message txt field)
  exercise_obj_message (exercise txt)
  workout_obj_exercise_list (workout tab delimited text)
  message_list (optional message list)
  */
  var sql = "CREATE TABLE IF NOT EXISTS feed (id INT AUTO_INCREMENT PRIMARY KEY, " +
    "complete VARCHAR(255), from_user_id INT , " +
    "visible VARCHAR(255), num INT, " +
    "date_now TIMESTAMP, " +
    "show_message VARCHAR(255), show_exercise VARCHAR(255), show_workout VARCHAR(255), " +
    "picture_large LONGBLOB, picture_small LONGBLOB, " +
    "message VARCHAR(1500), " +
    "message_obj_from VARCHAR(255), message_obj_to INT , " +
    "message_obj_message VARCHAR(1500) , " +
    "exercise_obj_message VARCHAR(1500),  " +
    "workout_obj_exercise_list VARCHAR(1500) , " +
    "message_list VARCHAR(1500) " +
    " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table feed created");
  });
  con.end((err) => {
    //end
  });
});

///////////////////////////////////////////
