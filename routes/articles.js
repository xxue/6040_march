var express = require('express');
var router = express.Router();

const {Article} = require('../models/index');
// create new article
router.get('/new', function (req, res, next) {
  res.render('articles/new')
});

router.post('/', function (req, res, next) {
});

/* GET articles listing. */
router.get('/', function(req, res, next) {
  // returns a Promise that resolves to a collection of all instances of the
// the model
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

  // .findById is an asynchronous method that queries the database which
  // means that it returns a promise. To the get the resolved value of the promise,
  // we use its .then method and pass it a callback
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
