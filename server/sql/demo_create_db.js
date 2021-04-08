var mysql = require('mysql');
require('dotenv').config({path:__dirname+ "/../../client/.env"});

let config = require('../../mysql-login.js');

//import config from "../mysql-login.js";

//config = JSON.stringify(config);
//config = JSON.parse(config);

console.log(config)

var con = mysql.createConnection({
  'host': process.env.MYSQL_HOST, 
  'user': process.env.MYSQL_USER,
  'password': process.env.MYSQL_PASSWORD,
  'port': process.env.MYSQL_PORT,
  //host: config.host,
  //user: config.user,
  //port: config.port,
  //password: config.password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE web", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  
  con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });

});

