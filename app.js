var express = require('express');
var path = require('path');
var logger = require('morgan');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')

require('dotenv').config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.URL)


var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/api/user', require('./routes/users'));
app.use('/api/tweet', require('./routes/tweet'));
app.use('/api/profile', require('./routes/profile'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.send(err);
});

module.exports = app;
