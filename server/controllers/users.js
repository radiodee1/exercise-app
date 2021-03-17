//const { request } = require("express");
const express = require("express");
//const { NotExtended } = require("http-errors");

const router = express.Router();

var model = require('../models/users.js');

router
.get('/users', async function (req, res, next) {
    //res.get('Content-Type', 'application/json');
    yy = await model.usersRouterGet(req, res);
    //console.log(yy + " string ");
    res.send(yy);
    //next();
})

.post('/users', async function (req, res, next)  {
    yy = await model.usersRouterPost(req, res, next);
    res.send(yy);
})
//.get('/users/friends', usersRouterFriendGet)
.get('/users/friends', async function (req, res, next)  {
    yy = await model.usersRouterFriendGet(req, res);
    res.send(yy);
})

module.exports = router;