var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var num = 1+2*20
  res.send('Result is:' + num)
});

module.exports = router;