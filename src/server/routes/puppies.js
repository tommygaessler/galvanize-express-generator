const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.send('send back all the puppies');
});

router.get('/:id', (req, res, next) => {
  res.send('send back single puppies');
});

module.exports = router;
