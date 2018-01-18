const Tweet = require('../models/tweetModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  createTwet (req,res) {
    let newTweet = new Tweet({
      tweet: req.body.tweet,
      user: req.decoded.id,
      hastag: req.body.hastag,
      picture: req.body.picture
    })
    newTweet.save()
     .then(data => {
       res.status(200).json({
         data: data,
         message: "data"
       })
     })
    .catch(err => {
      console.log(err)
      res.status(403).json({
        error: err
      })
    })
  },
  getAllTweet (req, res) {
    Tweet.find()
      .then(data => {
        res.status(200).json({
          data: data,
          message: "berhasil get"
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: "data gagal save"
        })
      })
  },
  getById () {
    Tweet.findById({_id: req.params.id})
      .then(data => {
        res.status(200).json({
          data: data,
          message: "berhasil get"
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: "data gagal save"
        })
      })
  },
  getByHashtag () {
    Tweet.find({hastag: req.params.hastag})
      .then(data => {
        res.status(200).json({
          data: data,
          message: "berhasil get"
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: "data gagal save"
        })
      })
  },
  updateTwet (req, res) {
    let id = {
      _id: req.params.id
    }
    Tweet.findOne(id)
      .then(data => {
        data.tweet = req.body.tweet || data.tweet
        data.hastag = req.body.hastag || data.hastag
        data.picture = req.body.picture || data.picture
        if (req.decoded.id == data.user) {
          data.save()
          .then(result => {
            res.status(200).json({
              message: "berhasil update",
              data: result
            })
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({
              message: "data gagal save"
            })
          })
        }
        else {
          res.status(403).json({
            message: "forbiden"
          })
        }
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: "data gak ada"
        })
      })
  },
  removeTweet (req,res) {
    Tweet.findByIdAndRemove({_id: req.params.id})
      .then(data => {
        res.status(201).json({
          message: "berhasil delete"
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: "data gagal save"
        })
      })
  }
};
