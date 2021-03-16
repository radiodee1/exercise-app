const { request } = require("express");
const express = require("express");

const app = express.Router();


var {feedRouterGet, feedRouterPost, feedRouterGetUser, feedRouterGetFriend, feedRouterDelete} = require("../models/feed.js");


app
.get('/feed', feedRouterGet)
.post('/feed', feedRouterPost)
.get('/feed/user', feedRouterGetUser)
.get('/feed/friend', feedRouterGetFriend)
.delete('/feed', feedRouterDelete)

module.exports = app;