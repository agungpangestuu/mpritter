var express = require('express');
var router = express.Router();
var Profile = require('../controllers/profileController')
var isLogin = require('../helpers/Checklogin')
/* GET users listing. */
router.post('/', isLogin, Profile.createProfile);
router.get('/:idUser', isLogin, Profile.profileGet);
router.put('/:idUser', isLogin, Profile.updateProfile);
// router.delete('/:id', isLogin, Profile.removeUser);

module.exports = router;
