const User = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();

 module.exports = {
   createUser (req, res) {
     let user = new User({
       username: req.body.username,
       password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
       email: req.body.email
     })
     user.save()
      .then(data => {
        res.status(200).json({
          message: "connect and create",
          data: data
        })
      })
      .catch(err => {
        res.send(err)
        console.error(err)
      })
   },
   signUser (req, res) {
     User.findOne({email: req.body.email})
      .then(data => {
        if (bcrypt.compareSync(req.body.password, data.password)){
          let token = jwt.sign({
            id: data._id,
            username: data.username
          }, process.env.secretKey)

          res.status(200).json({
            message:"connect",
            token: token,
            id: data._id
          })
        }
        else {
          res.status(401).json({
            message:"gagal auth"
          })
        }
      })
   },
   updateUser (req, res) {
     let id = {
       _id: req.params.id
     }
     User.findOne(id)
      .then(result => {
        result.username = req.body.username || result.username
        result.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)) || result.password
        result.email = req.body.email || result.email

        result.save()
          .then(data => {
            res.status(200).json({
              data: data
            })
          })
          .catch(err => {
            res.status(500).json({
              error: err,
              message: "gagal save update"
            })
            console.log(err)
          })
      })
      .catch(err => {
        res.status(401).json({
          message: "gagal user not found"
        })
      })

   },
   removeUser (req,res) {
     User.findByIdAndRemove({_id: req.params.id})
      .then(data => {
        res.status(200).json({
          message: "sukses"
        })
      })
      .catch(err => {
        res.status(500).json({
          message: "data ga ada"
        })
      })
   }

 };
