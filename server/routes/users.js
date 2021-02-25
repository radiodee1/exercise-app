var express = require('express');
var router = express.Router();
var sql = require('../public/javascripts/sql_populate.js');

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
  cookie: ""
};

const user_few = {
  firstname: "John",
  lastname: "Doe",
  //address: "",
  //city: "",
  //state: "",
  //zip: "",
  //email: "",
  username: "",
  password: "",
  height_inches: 74,
  weight_lbs: 150,
  id: 0,
  cookie: ""
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  const columns = [];
  for (let i in user_all) {
    columns.push(i);
  }
  x = sql.makeSelectFormat('profiles', columns, '', false);
  let con = sql.connection();
  y = sql.query(con, x);
  res.send(y);
});

module.exports = router;
