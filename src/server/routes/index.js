const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
// requires the function in controllers

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';

  // passes in 1, and 2 to be added, and error and results into callback
  // if there is an error it returns the error
  // if there is not an error, the error is null and results is the added number, which is total

  indexController.sum(1, 2, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render('index', renderObject);
    }
  });
});

router.get('/test', function(request, response, next) {
  response.send('test');
});

module.exports = router;
