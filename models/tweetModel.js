const mongoose = require('mongoose')
const Schema = mongoose.Schema

let tweetSchema = new Schema({
  tweet: {
    type: String,
    requires: true,
    maxlength: 140
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  hastag: [{
    type: String
  }],
  picture: {type: String},
  createAt: {type: Date, default: Date.now}

})

const tweetModel = mongoose.model('Tweet', tweetSchema)
module.exports = tweetModel;
