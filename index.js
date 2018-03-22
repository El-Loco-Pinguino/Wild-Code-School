var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', { sayHello: 'Hello Buddy !' });
});

module.exports = router;
