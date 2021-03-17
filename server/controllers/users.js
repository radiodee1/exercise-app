//const { request } = require("express");
const express = require("express");
//const { NotExtended } = require("http-errors");

const router = express.Router();

var model = require('../models/users.js');

router
.get('/users', async function (req, res, next) {
    let yy = await model.usersRouterGet(req, res);
    res.send(yy);
    
})

.post('/users', async function (req, res, next)  {
    let yy = await model.usersRouterPost(req, res, next);
    res.send(yy);
})

.get('/users/friends', async function (req, res, next)  {
    let yy = await model.usersRouterFriendGet(req, res);
    res.send(yy);
})

module.exports = router;