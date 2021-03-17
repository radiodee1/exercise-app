//const { request } = require("express");
const express = require("express");


const app = express.Router();

var model = require("../models/friends.js");

app
.get('/friends', async function(req, res, next)  {
    let yy = await model.friendRouterGet(req, res, next);
    res.send(yy);
})

.post('/friends', async function (req, res, next) {
    let yy = await model.friendRouterPost(req, res, next);
    res.send(yy);
})

.patch('/friends', async function (req, res, next) {
    let yy = await model.friendRouterPatch(req, res, next);
    res.send(yy);
})

module.exports = app;