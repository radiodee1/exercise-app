const { request } = require("express");
const express = require("express");


const app = express.Router();

var {workoutRouterGet } = require("../models/workouts.js");


app.use('/workout', workoutRouterGet);

module.exports = app;