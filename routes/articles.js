var express = require('express');
var router = express.Router();

const {Article} = require('../models/index');
// create new article
// router.get('/new', function (req, res, next) {
//   res.render('articles/new')
// });

router.post('/', function (req, res, next) {
});

router.get('/', function(req, res, next) {
  Article
   .findAll({order: [['id', 'ASC']]})
  
   .then(
     articles => {
       res.render('articles/index', {articles})
     }
   )
});

router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  Article
    .findById(id)
    .then(
      article => res.render('articles/show', {article})
    )
    .catch(
       err => next(err)
   )
});

module.exports = router;
