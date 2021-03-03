var express = require('express');
var feedRouterGet = express.Router();
var feedRouterPost = express.Router();
var sql = require('../public/javascripts/sql_populate.js');
//require('promise');

var app = express();

const feed_all = {
    visible: false,

    num: 0,

    date_now: "",

    show_message: false,
    show_exercise: false,
    show_workout: false,

    'CONVERT(picture_large USING utf8)': null,
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
feedRouterGet.get('/', function (req, res, next) {
    res.set('Content-Type', 'application/json');
    //console.log(res.req.query);
    const id = res.req.query.id;
    const columns = [];
    for (let i in feed_all) {
      columns.push(i);
    }
    //let x = sql.makeSelect('feed', columns, 'ORDER BY date_now DESC ', false);
    let x = sql.sqlMakeFriendFeedSelect(columns, id);
    console.log(x);
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
  
  /* POST feed listing. */
  feedRouterPost.post('/', function (req, res, next) {
    res.set('Content-Type', 'application/json');
  
    console.log(req.body);
    let x = sql.sqlInsertObjJSON(req.body, 'feed');
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
    feedRouterGet,
    feedRouterPost
}