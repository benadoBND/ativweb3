var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send('users');
});/* GET users listing. */
router.get('/cool/beach', function(req, res, next) {
  res.send('beach');
});/* GET users listing. */
router.get('/ifc', function(req, res, next) {
  res.send('ifc');
});
module.exports = router;
