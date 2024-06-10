var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { type: 'page1' });
});
router.get('/traffic', function(req, res, next) {
  res.render('traffic', { title: 'page2' });
});
module.exports = router;
