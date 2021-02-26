var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.body + " req");
  res.render('index', { title: 'Express x' });
});

module.exports = router;
