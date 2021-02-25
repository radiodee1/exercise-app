var mysql = require('mysql');

const config = require('../mysql-login.json')

console.log(config)

var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  port: config.port,
  password: config.password,
  database: "web"
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
  */
  var sql = "CREATE TABLE IF NOT EXISTS profiles (id INT AUTO_INCREMENT PRIMARY KEY, " +
    "firstname VARCHAR(255), lastname VARCHAR(255), " +
    "address VARCHAR(255), city VARCHAR(255), " +
    "state VARCHAR(255), zip VARCHAR(255), " +
    "email VARCHAR(255), username VARCHAR(255), " +
    "password VARCHAR(255), cookie VARCHAR(255) ," + 
    "from_user_id INT, height_inches INT, weight_lbs FLOAT " +
  // ", picture LONGBLOB " + 
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

    "date_now TIMESTAMP, " +
    "show_message VARCHAR(255), show_exercise VARCHAR(255), show_workout VARCHAR(255), " +
    "picture_large LONGBLOB, picture_small LONGBLOB, " +
    "message VARCHAR(255), " +
    "message_obj_from INT, message_obj_to INT , " +
    "message_obj_message VARCHAR(255) , " +
    "exercise_obj_message VARCHAR(255),  " +
    "workout_obj_exercise_list VARCHAR(255) , " +
    "message_list VARCHAR(255) " +
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


  /*
  messages: a table of messages between users
  entered in some user form
  ----
  id
  from_user_id (source for message)
  to_user_id (destination and key to search on)
  message (actual text of message)
  date (date message was sent) 
  
  var sql = "CREATE TABLE messages (id INT AUTO_INCREMENT PRIMARY KEY, " +
    "from_user_id INT, to_user_id INT, " +
    "message VARCHAR(255), date TIMESTAMP " +

    " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table messages created");
  });
  */


  /*
  posts: organize post list to search for with 3 complex joins
  constructed as posts are generated, erased when exercises are combined to workouts
  ----
  id
  table_name (enum for what kind of post 'messages'/'exercise'/'workout' )
  table_id (num copied from table id of messages/exercise/workout)
  date (date of post)
  from_user_id (num copied from user id -and- act as one search key)
  
  var sql = "CREATE TABLE posts (id INT AUTO_INCREMENT PRIMARY KEY, " +
    "table_name VARCHAR(255), table_id INT, " +
    "date TIMESTAMP, from_user_id INT " +

    " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table posts created");
  });
  */


  /* 
  exercises: recording of single exercise repetition
  entered in some user form
  ----
  id
  exercise_name (something like 'push-ups')
  repititions (a number like '1' or '5')
  unit_name (a dropdown like 'reps', or 'miles', or 'km')
  extra_name (extra info like '30lbs', '20lbs', etc.)
  date (a date timestamp)
  complete (a boolean or enumeration for whether an exercise is done)
  from_user_id (the user id of the exerciser)
  
  var sql = "CREATE TABLE exercises (id INT AUTO_INCREMENT PRIMARY KEY, " +
    "exercise_name VARCHAR(255), repititions INT, " +
    "unit_name VARCHAR(255), extra_name VARCHAR(255), date TIMESTAMP, " +
    "complete VARCHAR(255), from_user_id INT " +

    " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table exercises created");
  });
  */

  /* 
  workout: a table for lists of exercises
  constructed days after exercises are recorded by user
  ----
  id
  date
  workout_id (can be any id from one of the linked exercises)
  from_user_id (user)
  exercise_id (many of these -- link to exercises)
  
  var sql = "CREATE TABLE workout (id INT AUTO_INCREMENT PRIMARY KEY, " +
    "date TIMESTAMP, workout_id INT, " +
    "from_user_id INT, exercise_id INT " +

    " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table workout created");
  });
  */
