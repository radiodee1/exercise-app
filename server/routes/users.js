var express = require('express');
var usersRouterGet = express.Router();
var usersRouterPost = express.Router();
var sql = require('../public/javascripts/sql_populate.js');
//require('promise');

var app = express();

const user_all = {
  firstname: "John",
  lastname: "Doe",
  address: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  username: "",
  password: "",
  height_inches: 74,
  weight_lbs: 150,
  id: 0,
  cookie: "",
  date: null,
  picture: null
};



/* GET users listing. */
usersRouterGet.get('/', function (req, res, next) {
  res.set('Content-Type', 'application/json');

  const columns = [];
  for (let i in user_all) {
    columns.push(i);
  }
  
  let x = sql.makeSelect('profiles', columns, '', false);
  let con = sql.connection();
  console.log(con);
  try {
    let y = sql.xquery(con, x);
    y.then(function (value) {
      console.log(value);
      let yy = JSON.stringify(value);
      res.json(yy);
      sql.end(con);
      console.log(yy);
    });
  }
  catch (v) {
    console.log(v);
  }
});

/* POST users listing. */
usersRouterPost.post('/', function (req, res, next) {
  res.set('Content-Type', 'application/json');

  console.log(req.body);
  let x = sql.sqlInsertObjJSON(req.body, 'profiles');
  let con = sql.connection();
  try {
    let y = sql.xquery(con, x);
    y.then(function (value) {
      console.log(value);
      let yy = JSON.stringify(value);
      res.json(yy);
      sql.end(con);

    });
  }
  catch (v) {
    console.log(v);
  }
});


module.exports = {
  usersRouterGet,
  usersRouterPost
}
