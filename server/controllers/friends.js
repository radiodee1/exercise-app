const { request } = require("express");
const express = require("express");


const app = express.Router();

var {friendRouterGet, friendRouterPost, friendRouterPatch} = require("../models/friends.js");

app.use('/friends', friendRouterGet)
.use('/friends', friendRouterPost)
.use('/friends', friendRouterPatch)

module.exports = app;