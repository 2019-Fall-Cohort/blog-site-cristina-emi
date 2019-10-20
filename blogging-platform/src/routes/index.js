const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Emi and Cristina's Cat Blog"});
});

module.exports = router;    