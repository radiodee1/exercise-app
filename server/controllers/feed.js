//const { request } = require("express");
const express = require("express");

const app = express.Router();


var model = require("../models/feed.js");


app
.get('/feed', async function (req, res, next) {
    let yy = await model.feedRouterGet(req, res, next);
    res.send(yy);
})

.post('/feed', async function (req, res, next)  {
    let yy = await model.feedRouterPost(req, res, next);
    res.send(yy);
})

.get('/feed/user', async function (req, res, next) {
    let yy = await model.feedRouterGetUser(req, res, next);
    res.send(yy)
})

.get('/feed/friend', async function (req, res, next) {
    let yy = await model.feedRouterGetFriend(req, res, next);
    res.send(yy);
})

.delete('/feed', async function (req, res, next) {
    let yy = await model.feedRouterDelete(req, res, next);
    res.send(yy);
})

module.exports = app;