var mysql = require('mysql');
require('dotenv').config({path:__dirname+ "/../../client/.env"});

//const config = require('../../mysql-login.js')

console.log(process.env)

var con = mysql.createConnection({
  'host': process.env.MYSQL_HOST, 
  'user': process.env.MYSQL_USER,
  'password': process.env.MYSQL_PASSWORD,
  'port': process.env.MYSQL_PORT,
  //host: config.host,
  //user: config.user,
  //port: config.port,
  //password: config.password,
  'database': process.env.MYSQL_DATABASE
});



con.connect(function (err) {
  if (err) throw err;

  /* 
  
  */
  var sql = "DROP TABLE IF EXISTS profiles, friends, likes, misc, feed ; " ;
    
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tables dropped");
  });

  con.end((err) => {
    //end
  });
});
