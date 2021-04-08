//const { request } = require("express");
const express = require("express");


const app = express.Router();

var model = require("../models/workouts.js");


app.get('/workout',  function (req, res, next) {
    let yy =  model.workoutRouterGet(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
});

module.exports = app;