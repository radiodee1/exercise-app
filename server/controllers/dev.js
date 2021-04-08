//const { request } = require("express");
const express = require("express");


const app = express.Router();

var model = require("../models/dev.js");


app.get('/dev',  function (req, res, next) {
    let yy =  model.devRouterGet(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
});

module.exports = app;