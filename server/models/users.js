var express = require('express');
//var usersRouterGet = express.Router();
//var usersRouterPost = express.Router();
//var usersRouterFriendGet = express.Router();
var sql = require('../public/javascripts/sql_populate.js');
//require('promise');
var control = require('../public/javascripts/sql_control.js');

var app = express();
const bcrypt = require('bcrypt');

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
  res.set('Content-Type', 'application/json');
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
      res.send(yy);
      control.end(con);

    });

  }
  catch (v) {
    console.log(v);
  }
  //console.log(yy);
  return yy;
}

/* POST users listing. */

module.exports.usersRouterPost = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  let yy = null;
  //console.log(req.body);
  //console.log("---");

  const password = req.body.password;
  const hash = await bcrypt.hash(password, 5);

  let body = {};
  for (let i in req.body) {
    body[i] = req.body[i];
    if (i === "password") {
      body[i] = hash;
    }
  }
  //body.password = hash;
  //console.log(body.password + " <ooo");

  //console.log(bcrypt.getRounds(hash) + " <++++");

  let x = sql.sqlInsertObjJSON(body, 'profiles');
  let con = control.connection();
  try {
    let y = control.xquery(con, x);
    await y.then(function (value) {
      //req.body.password = "";

      //value = [req.body];

      //console.log(value);
      yy = JSON.stringify(value);
      //res.json(yy);
      console.log(yy);

      let yyy = { ...body, id: JSON.parse(yy).insertId }
      //console.log(yyy);
      //console.log("^^^");
      res.send(JSON.stringify(yyy));
      control.end(con);

    });
  }
  catch (v) {
    console.log(v);
  }
  //return yy;
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
      //console.log(value);
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

  let x = sql.sqlUserUpdateRaw(profile_id, weight);

  let con = control.connection();
  //console.log(con);
  try {
    let y = control.xquery(con, x);
    await y.then(function (value) {
      //console.log(value);
      let yy = JSON.stringify(value);
      //res.json(yy);
      //control.end(con);
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

module.exports.usersRouterPostLogin = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  console.log(req.body.password + " <---");
  console.log(req.body.username + " <###");
  const password = req.body.password;

  let y_val = null;
  //const hash = await bcrypt.hash(password, 8);
  //console.log(hash);

  //console.log(req.body);

  user_list = [];
  for (let i in user_all) {
    //if (i !== "password") {
    user_list.push(i);
    //}
  }
  //let x = sql.sqlInsertObjJSON(req.body, 'profiles');
  let x = sql.makeSelectFormat('profiles', user_list, `WHERE username = '${req.body.username}'`)
  //console.log(x);
  //console.log("#####");
  let con = control.connection();
  try {
    let y = control.xquery(con, x);
    await y.then(async function (value) {
      //console.log(value);
      let yy = JSON.stringify(value);

      y_val = JSON.parse(yy);
      //console.log(y_val);
      result = await bcrypt.compare(password, y_val[0].password ); 
      
      if (result) {
        if (!y_val[0].firstname) {
          throw "Must have first name"
        }
        y_val[0].password = null;
        console.log("send user...");
        res.send(y_val);
        
      }
      else if (!result) {
        console.log("no result");
        y_val = [{}];
        res.send(y_val);
        throw "No good password"
      }


    control.end(con);

  });
}
  catch (v) {
  console.log(v);
}
  return y_val;
   //next();
}