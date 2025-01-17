var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var session = require('express-session')


var indexRouter = require('./routes/index');
var findRouter = require('./routes/findAPI');
var findinfoRouter = require('./routes/findinfo')
var watchlistRouter = require('./routes/watchlist')
var feedbackRouter = require('./routes/feedbackAPI')


var app = express();

// engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'keyboardcat',resave: true,saveUninitialized: true,cookie: { maxAge: 60000 }}))
 
app.use('/', indexRouter);
app.use('/find',findRouter);
app.use('/info',findinfoRouter);
app.use('/watch',watchlistRouter);
app.use('/feedback',feedbackRouter)


//Error handeler

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
