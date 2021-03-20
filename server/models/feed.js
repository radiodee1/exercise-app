var express = require('express');
//var feedRouterGet = express.Router();
//var feedRouterPost = express.Router();
//var feedRouterGetUser = express.Router();
//var feedRouterGetFriend = express.Router();
//var feedRouterDelete = express.Router();
var sql = require('../public/javascripts/sql_populate.js');
//require('promise');
var control = require('../public/javascripts/sql_control.js');

var app = express();

const feed_all = {
    id: 0,

    visible: false,

    num: 0,

    date_now: "",

    show_message: false,
    show_exercise: false,
    show_workout: false,

    'CONVERT(picture_large USING utf8) AS picture_large ': null,
    picture_small: null,

    message: "hello-world",

    from_user_id: 0,

    message_obj_from: "",
    message_obj_to: "",
    message_obj_message: "",
    
    exercise_obj_message: "",
    
    workout_obj_exercise_list: "",

    message_list: "",
}



/* GET feed listing. */
module.exports.feedRouterGet = async function (req, res, next) {
    res.set('Content-Type', 'application/json');
    let out = [];
    //console.log(res.req.query);
    const id = res.req.query.id;
    const columns = [];
    for (let i in feed_all) {
      columns.push(i);
    }
    //let x = sql.makeSelect('feed', columns, 'ORDER BY date_now DESC ', false);
    let x = sql.sqlMakeFriendFeedSelect(columns, id);
    console.log(x);
    let con = control.connection();
    try {
      let y = control.xquery(con, x);
      await y.then(function (value) {
        console.log(value);
        let yy = JSON.stringify(value);
        //res.json(yy);
        control.end(con);
        out = yy;
      });
    }
    catch (v) {
      console.log(v);
    }
    return out;
  };
  
  /* POST feed listing. */
  module.exports.feedRouterPost = async function (req, res, next) {
    res.set('Content-Type', 'application/json');
  
    console.log(req.body);
    let x = sql.sqlInsertObjJSON(req.body, 'feed');
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
  };
  
  /* GET feed listing just for my posts. */
module.exports.feedRouterGetUser = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  //console.log(res.req.query);
  let out = [];
  const id = res.req.query.id;
  const columns = [];
  for (let i in feed_all) {
    columns.push(i);
  }
  let x = sql.makeSelect('feed', columns, 'WHERE from_user_id = ' + id + ' ORDER BY date_now DESC ', false);
  //let x = sql.sqlMakeFriendFeedSelect(columns, id);
  console.log(x);
  let con = control.connection();
  try {
    let y = control.xquery(con, x);
    await y.then(function (value) {
      //console.log(value);
      let yy = JSON.stringify(value);
      //res.json(yy);
      control.end(con);
      out = yy;
      //console.log(out);
    });
  }
  catch (v) {
    console.log(v);
  }
  return out;
};

/* GET feed listing just for a friend's post. */
module.exports.feedRouterGetFriend = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  //console.log(res.req.query);
  let out = [];
  const id = res.req.query.id;
  const columns = [];
  for (let i in feed_all) {
    columns.push(i);
  }
  let x = sql.makeSelect('feed', columns, 'WHERE from_user_id = ' + id + ' ORDER BY date_now DESC ', false);
  //let x = sql.sqlMakeFriendFeedSelect(columns, id);
  console.log(x);
  let con = control.connection();
  try {
    let y = control.xquery(con, x);
    await y.then(function (value) {
      console.log(value);
      let yy = JSON.stringify(value);
      //res.json(yy);
      control.end(con);
      out = yy;
    });
  }
  catch (v) {
    console.log(v);
  }
  return out;
};

/* DELETE feed listing. */
module.exports.feedRouterDelete = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  //console.log(res.req.query);
  const id = req.body.id;
  //const columns = [];
  //for (let i in feed_all) {
  //  columns.push(i);
  //}
  let x = 'DELETE FROM feed WHERE id = ' + id + ' ';
  //let x = sql.sqlMakeFriendFeedSelect(columns, id);
  console.log(x);
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
};


