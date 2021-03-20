var express = require('express');
//var workoutRouterGet = express.Router();
//var workoutRouterPost = express.Router();
var sql = require('../public/javascripts/sql_populate.js');
//require('promise');

/* GET feed listing. */
module.exports.devRouterGet = async function (req, res, next) {
    res.set('Content-Type', 'application/json');
    //console.log(res.req.query);
    let out = [];

    const lower = res.req.query.lower / 1000;
    const upper = res.req.query.upper / 1000;

    
    let x = sql.selectLeftOuterJoinRaw(lower, upper);
    //let x = sql.sqlMakeFriendFeedSelect(columns, id);
    //console.log(x);
    let con = sql.connection();
    try {
      let y = sql.xquery(con, x);
      await y.then(function (value) {
        //console.log(value);
        let yy = JSON.stringify(value);
        //res.json(yy);
        sql.end(con);
        out = yy;
      });
    }
    catch (v) {
      console.log(v);
    }
    return out;
  };
  