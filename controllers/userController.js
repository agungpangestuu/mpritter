const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jwt')

 module.exports = {
   createUser (req, res) {
     let user = new User({
       username: req.body.username,
       password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
       email: req.body.email,
       fullname: req.body.fullname
     })
     user.save()
      .then(data => {
        res.status(200).json({
          message: "connect and create",
          data: data
        })
      })
   },
   signUser (req, res) {

   },
   updateUser (req, res) {
     let id = {
       _id: req.params.id
     }
     User.findOne()
   }

 };
