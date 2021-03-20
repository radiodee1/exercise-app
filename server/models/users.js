var express = require('express');
//var usersRouterGet = express.Router();
//var usersRouterPost = express.Router();
//var usersRouterFriendGet = express.Router();
var sql = require('../public/javascripts/sql_populate.js');
//require('promise');
var control = require('../public/javascripts/sql_control.js');

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

//var yy = null;


/* GET users listing. */
module.exports.usersRouterGet = async function (req, res, next) {
  //res.set('Content-Type', 'application/json');
  var yy = null;
  const columns = [];
  for (let i in user_all) {
    columns.push(i);
  }
  //let yy = null;
  let x = sql.makeSelect('profiles', columns, '', false);
  let con = control.connection();
  //console.log(con);
  try {
    let y = control.xquery(con, x);
    //console.log("----");
    await y.then(function (value) {
      //console.log(value);
      yy = JSON.stringify(value);
      
      control.end(con);
      
    });
    
  }
  catch (v) {
    console.log(v);
  }
  console.log(yy);
  return yy;
}

/* POST users listing. */

module.exports.usersRouterPost = async function (req, res, next) {
  //res.set('Content-Type', 'application/json');

  console.log(req.body);
  let x = sql.sqlInsertObjJSON(req.body, 'profiles');
  let con = control.connection();
  try {
    let y = control.xquery(con, x);
    await y.then(function (value) {
      console.log(value);
      let yy = JSON.stringify(value);
      res.json(yy);
      control.end(con);

    });
  }
  catch (v) {
    console.log(v);
  }
   //next();
}


/* GET users listing. */


module.exports.usersRouterFriendGet = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  let profile_id = req.query.id;
  let out = [];
  const columns = [];
  for (let i in user_all) {
    columns.push(i);
  }
  let x = sql.sqlMakeFriendSearchSelect(columns, profile_id);
  //let x = sql.makeSelect('profiles', columns, '', false);
  let con = control.connection();
  //console.log(con);
  try {
    let y = control.xquery(con, x);
    await y.then(function (value) {
      console.log(value);
      let yy = JSON.stringify(value);
      //res.json(yy);
      control.end(con);
      //console.log(yy);
      out = yy;
    });
  }
  catch (v) {
    console.log(v);
  }
   //next();
   return out;
};


module.exports.usersRouterWeightPatch = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  let profile_id = req.body.ident.id;
  let weight = req.body.change.weight_lbs;
  
  let x = sql.sqlUserUpdateRaw( profile_id, weight);

  let con = control.connection();
  //console.log(con);
  try {
    let y = control.xquery(con, x);
    await y.then(function (value) {
      console.log(value);
      let yy = JSON.stringify(value);
      //res.json(yy);
      control.end(con);
      //console.log(yy);
      out = yy;
    });
  }
  catch (v) {
    console.log(v);
  }
   //next();
   return out;
}