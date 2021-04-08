//const { request } = require("express");
const express = require("express");


const app = express.Router();

var model = require("../models/friends.js");

app
.get('/friends',  function(req, res, next)  {
    let yy =  model.friendRouterGet(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

.post('/friends',  function (req, res, next) {
    let yy =  model.friendRouterPost(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

.patch('/friends',  function (req, res, next) {
    let yy =  model.friendRouterPatch(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

module.exports = app;