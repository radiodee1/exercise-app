//const { request } = require("express");
const express = require("express");

const app = express.Router();


var model = require("../models/feed.js");


app
.get('/feed',  function (req, res, next) {
    let yy =  model.feedRouterGet(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

.post('/feed',  function (req, res, next)  {
    let yy =  model.feedRouterPost(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

.get('/feed/user',  function (req, res, next) {
    let yy =  model.feedRouterGetUser(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy)
})

.get('/feed/friend',  function (req, res, next) {
    let yy =  model.feedRouterGetFriend(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

.delete('/feed',  function (req, res, next) {
    let yy =  model.feedRouterDelete(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

module.exports = app;