//const { request } = require("express");
const express = require("express");

const router = express.Router();

var model = require('../models/users.js');

router
.get('/users', (req, res) => res.send(model.usersRouterGet(req, res)))

.post('/users', (req, res) => res.send(model.usersRouterPost(req, res)))
//.get('/users/friends', usersRouterFriendGet)
.get('/users/friends', (req, res) => res.send(model.usersRouterFriendGet(req, res)))

module.exports = router;