const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.send('send back all the cats');
});

router.get('/:id', (req, res, next) => {
  res.send('send back single cat');
});

module.exports = router;
