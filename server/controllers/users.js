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

.post('/users', (req, res) => res.send(model.usersRouterPost(req, res)))
//.get('/users/friends', usersRouterFriendGet)
.get('/users/friends', (req, res) => res.send(model.usersRouterFriendGet(req, res)))

module.exports = router;