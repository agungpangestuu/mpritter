var express = require('express');
var router = express.Router();
var Tweet = require('../controllers/tweetController')
var isLogin = require('../helpers/Checklogin')

/* GET users listing. */
router.post('/', isLogin, Tweet.createTwet);
router.get('/', Tweet.getAllTweet);
router.get('/:id', Tweet.getById);
router.put('/:id', isLogin, Tweet.updateTwet);
router.delete('/:id', isLogin, Tweet.removeTweet);

module.exports = router;
