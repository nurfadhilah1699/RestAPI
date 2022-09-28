// eslint-disable-next-line import/no-unresolved
const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (_req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
