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
  
  */
  var sql = "DROP TABLE IF EXISTS profiles, friends, likes, misc, feed,  " ;
    
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table profiles created");
  });

  con.end((err) => {
    //end
  });
});
