const jwt = require('jsonwebtoken');
require('dotenv').config()
const secret_key = process.env.secretKey

var isLogin = (req, res, next) => {
  console.log(req.headers.token);
  if (req.headers.token) {
    jwt.verify(req.headers.token, secret_key, function(err, decoded) {
      console.log('ini decoded body', err)
      if(decoded) {
        req.decoded = decoded
        console.log('decoded>',decoded ,'<decoded');
        next()
        console.log('next>>>')
      }
      else {
        res.status(401).send({
          error: 'please login first'
        })
      }
    })
  }
}
