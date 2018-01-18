const mongoose = require('mongoose')
const Schema = mongoose.Schema

let profileSchema = new Schema({
  picture: {
    type: String,
    default: "https://static1.squarespace.com/static/5317b571e4b01396b757268a/535ed193e4b081613fd31a34/535ed193e4b081613fd31a39/1398722779508/photo-placeholder.png"
  },
  firstname : {
    type : String
  },
  lastname: {
    type: String
  },
  bio: {
    type: String,
    default: ""
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const profileModel = mongoose.model('Profile', profileSchema)
module.exports = profileModel;
