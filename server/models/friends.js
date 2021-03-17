var express = require('express');
//var friendRouterGet = express.Router();
//var friendRouterPost = express.Router();
//var friendRouterPatch = express.Router();
var sql = require('../public/javascripts/sql_populate.js');
//require('promise');

var app = express();

const user_all = {
    firstname: "John",
    lastname: "Doe",
    //address: "",
    //city: "",
    //state: "",
    //zip: "",
    //email: "",
    username: "",
    //password: "",
    //height_inches: 74,
    //weight_lbs: 150,
    id: 0,
    //cookie: ""
};

const friends_all = {
    user_id: 0,
    friend_user_id: 0,
    friend_status: "",
    //date: null
};

/* GET friends listing. */
module.exports.friendRouterGet = async function (req, res, next) {
    res.set('Content-Type', 'application/json');
    //console.log(req);
    //console.log("---");
    let out = [];
    let id = req.query.id;
    //console.log(id);
    //save for later??

    const columns_profile = [];
    for (let i in user_all) {
        columns_profile.push(i);
    }

    const columns_friends = [];
    for (let i in friends_all) {
        columns_friends.push(i);
    }

    let x = sql.selectLeftOuterJoin("profiles", "friends", columns_profile, columns_friends, "t1.id = t2.friend_user_id OR t1.id = t2.user_id ");
    //console.log(x);
    //let x = sql.makeSelect('profiles', columns_profile, "", false);

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

/* POST friends listing. */
module.exports.friendRouterPost = async function (req, res, next) {
    res.set('Content-Type', 'application/json');
    let out = [];
    //console.log(req.body);
    let x = sql.sqlInsertObjJSON(req.body, 'friends');
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

/* PATCH friends listing. */
module.exports.friendRouterPatch = async function (req, res, next) {
    res.set('Content-Type', 'application/json');
    let out = [];
    //console.log(req.body);
    //let x = sql.sqlInsertObjJSON(req.body, 'friends');
    let x = sql.sqlMakeUpdate('friends', req.body.ident, req.body.change);
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
