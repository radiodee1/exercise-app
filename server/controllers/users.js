//const { request } = require("express");
const express = require("express");
//const { NotExtended } = require("http-errors");

const router = express.Router();

var model = require('../models/users.js');
const { LoginRequired  } = require('./security');


router
.get('/users', LoginRequired, function (req, res, next) { //return all users -- I think this is used in dev.
    let yy =  model.usersRouterGet(req, res);
    //res.send(yy);
})

.get('/users/username', LoginRequired, function (req, res, next) {
    let yy =  model.usersRouterGetUsername(req, res);
    //res.send(yy);
})

.post('/users/register',  function (req, res, next)  {
    let yy =  model.usersRouterPost(req, res, next);
    //res.send(yy);
})

.post('/users/login',  function (req, res, next)  {
    let yy =  model.usersRouterPostLogin(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

.post('/users/login/fb',  function (req, res, next)  {
    let yy =  model.usersRouterPostLoginFB(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

.get('/users/friends', LoginRequired, function (req, res, next)  {
    let yy =  model.usersRouterFriendGet(req, res);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

.patch('/users/weight', LoginRequired, function (req, res, next) {
    let yy =  model.usersRouterWeightPatch(req, res, next);
    yy.then(x => {res.send(x)});
    //res.send(yy);
})

.post('/users/delete', LoginRequired,  function (req, res, next)  {
    let yy =  model.usersRouterPostDelete(req, res, next);
    //res.send(yy);
})

.get('/users/type', function (req, res, next){
    let yy = model.usersRouterGetType(req, res, next);
    res.send(yy);
}) 
module.exports = router;