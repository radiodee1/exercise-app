var express = require('express');
var usersRouterGet = express.Router();
//var usersRouterPost = express.Router();
//var usersRouterFriendGet = express.Router();
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
module.exports.usersRouterGet = function (req, res, next) {
  res.set('Content-Type', 'application/json');
  let yy = null;
  const columns = [];
  for (let i in user_all) {
    columns.push(i);
  }
  //let yy = null;
  let x = sql.makeSelect('profiles', columns, '', false);
  let con = sql.connection();
  //console.log(con);
  try {
    let y = sql.xquery(con, x);
    y.then(function (value) {
      console.log(value);
      yy = JSON.stringify(value);
      res.json(yy);
      sql.end(con);
      console.log({'yy':yy});
    });
  }
  catch (v) {
    console.log(v);
  }
  return yy;
}

/* POST users listing. */

module.exports.usersRouterPost =  function (req, res, next) {
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
   //next();
}


/* GET users listing. */


module.exports.usersRouterFriendGet = function (req, res, next) {
  res.set('Content-Type', 'application/json');
  let profile_id = req.query.id;

  const columns = [];
  for (let i in user_all) {
    columns.push(i);
  }
  let x = sql.sqlMakeFriendSearchSelect(columns, profile_id);
  //let x = sql.makeSelect('profiles', columns, '', false);
  let con = sql.connection();
  //console.log(con);
  try {
    let y = sql.xquery(con, x);
    y.then(function (value) {
      console.log(value);
      let yy = JSON.stringify(value);
      res.json(yy);
      sql.end(con);
      //console.log(yy);
    });
  }
  catch (v) {
    console.log(v);
  }
   //next();
   return yy;
};


/*
module.exports = {
  usersRouterGet,
  //usersRouterPost,
  //usersRouterFriendGet
}
*/
