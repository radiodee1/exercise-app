//const { request } = require("express");
const express = require("express");


const app = express.Router();

var model = require("../models/dev.js");


app.get('/dev', async function (req, res, next) {
    let yy = await model.devRouterGet(req, res, next);
    res.send(yy);
});

module.exports = app;