var express = require('express');
var router = express.Router();

var index = require('./pages/index');
var about = require('./pages/about');

router.get('/', index);
router.get('/about', about);

module.exports = router;