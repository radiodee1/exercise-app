var express = require('express');
//var workoutRouterGet = express.Router();
//var workoutRouterPost = express.Router();
var sql = require('../public/javascripts/sql_populate.js');
//require('promise');
var control = require('../public/javascripts/sql_control.js');

const feed_all = {
    visible: false,

    num: 0,

    //date_now: "",
    //"CAST(date_now AS DATE) AS `date_now` " : null,
    "CAST(CURTIME() AS DATE)+0 AS `date_now` " : null,
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
module.exports.workoutRouterGet = async function (req, res, next) {
    res.set('Content-Type', 'application/json');
    //console.log(res.req.query);
    let out = [];
    const id = res.req.query.id;
    const days = res.req.query.days;
    const columns = [];
    for (let i in feed_all) {
      columns.push(i);
    }
    if (days === 0 || days === "0"){
      days = "+0";
    }
    let xx = 'WHERE from_user_id = '+ id + ' AND show_exercise = "1" AND `date_now` > CAST(CURTIME() AS DATE)+0 + ' + ( days ) + '  ORDER BY date_now DESC ';
    let x = sql.makeSelect('feed', columns, xx, false);
    //let x = sql.sqlMakeFriendFeedSelect(columns, id);
    //console.log(x);
    let con = control.connection();
    try {
      let y = control.xquery(con, x);
      await y.then(function (value) {
        //console.log(value);
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
  
