const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  fullname: {
    type: String
  },
  email : {
    type : String,
    validate : {
      validator : function(email_validator){
        return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_validator)
      },
      message : '{VALUE} is not a valid mail format, use: example@mail.com'
    }
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    requires: true,
    unique: true
  }
})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel;
