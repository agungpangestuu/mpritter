var express = require('express');
var router = express.Router();
var User = require('../controllers/userController')

/* GET users listing. */
router.post('/', User.createUser);
router.post('/signin', User.signUser);
router.put('/:id', User.updateUser);
router.delete('/:id', User.removeUser);

module.exports = router;
