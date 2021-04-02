//const { request } = require("express");
const express = require("express");
//const { NotExtended } = require("http-errors");

const router = express.Router();

var model = require('../models/users.js');
const { LoginRequired  } = require('./security');


router
.get('/users', async function (req, res, next) { //return all users -- I think this is used in dev.
    let yy = await model.usersRouterGet(req, res);
    //res.send(yy);
})

.get('/users/username', async function (req, res, next) {
    let yy = await model.usersRouterGetUsername(req, res);
    //res.send(yy);
})

.post('/users/register', async function (req, res, next)  {
    let yy = await model.usersRouterPost(req, res, next);
    //res.send(yy);
})

.post('/users/login', async function (req, res, next)  {
    let yy = await model.usersRouterPostLogin(req, res, next);
    res.send(yy);
})

.get('/users/friends', async function (req, res, next)  {
    let yy = await model.usersRouterFriendGet(req, res);
    res.send(yy);
})

.patch('/users/weight', async function (req, res, next) {
    let yy = await model.usersRouterWeightPatch(req, res, next);
    res.send(yy);
})

module.exports = router;