const Profile = require('../models/profileModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();

 module.exports = {
   createProfile (req, res) {
     let profile = new Profile({
       firstname: req.body.firstname,
       lastname: req.body.lastname,
       bio: req.body.bio,
       user: req.decoded.id,
       picture: req.params.picture
     })
     profile.save()
      .then(data => {
        // User.findByIdAndUpdate(data.user,{profile: data._id})
        //   .then(result => {
            res.status(200).json({
              message: "connect and create",
              data: data
            })
          // })
      })
      .catch(err => {
        res.send(err)
        console.error(err)
      })
   },
   profileGet (req,res) {
     //find by user ref in model profile
     Profile.findById({user: req.params.idUser})
      .then(data => {
        res.status(200).json({
          data: data,
          message: "berhasil get data"
        })
      })
      .catch(err => {
        res.status(401).json({
          message: "gagal user not found"
        })
      })
   },
   updateProfile (req, res) {
     let id = {
       _id: req.params.id
     }
     Profile.findOne(id)
      .then(result => {
        result.firstname = req.body.firstname || result.firstname,
        result.lastname = req.body.lastname || result.lastname,
        result.bio = req.body.bio || result.bio,
        result.picture = req.params.picture || result.picture
        if (req.decoded.id == result.user) {
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
        }
        else {
          res.status(403).json({
            message: "forbiden"
          })
        }
      })
      .catch(err => {
        res.status(401).json({
          message: "gagal user not found"
        })
      })

   },
   removeUser (req,res) {
     Profile.findByIdAndRemove({_id: req.params.id})
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
