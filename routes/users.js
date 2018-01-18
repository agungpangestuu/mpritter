var express = require('express');
var router = express.Router();
var User = require('../controllers/userControllers')

/* GET users listing. */
router.get('/', User);

module.exports = router;
