//const { request } = require("express");
const express = require("express");


const app = express.Router();

var model = require("../models/workouts.js");


app.get('/workout', async function (req, res, next) {
    let yy = await model.workoutRouterGet(req, res, next);
    res.send(yy);
});

module.exports = app;