var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('static_pages/home')
});

router.get('/:static_page', function(req, res, next) {
  res.render(`static_pages/${req.params.static_page}`)
});
module.exports = router;
