const functions = require('firebase-functions');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var twitterRouter = require('./routes/twitter');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/twitter', twitterRouter);
app.use('/', (req, res) => {
  res.send('Twitter test')
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  // next(createError(404));
  res.status(404)
  res.send('404 not found')
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err)
  // render the error page
  if (err.statusCode) {
    res.status(err.statusCode);
    res.send(err);
  } else {
    res.status(err.status || 500);
    res.send(err);
  }
});

exports.app = functions.https.onRequest(app);
