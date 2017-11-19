var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');

var MongoStore = require('connect-mongo')(session);
//Email Validator
var validator = require('express-validator');
//New handle bar object
var expressHbs = require('express-handlebars');

//import mongoose
var mongoose = require('mongoose');

//connecting to mongodb database
mongoose.connect('localhost:27017/shopping');

//making sure passport.js runs
require('./config/passport');

var userRoutes = require('./routes/user'); 
//Routing to Homepage
var routes = require('./routes/index');

var app = express();

//setting default layout to be layout.hbs
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
// view engine setup

//for favicon usage
//app.set('views', path.join(__dirname, 'views'));

//view engine
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Validator Initialization
app.use(validator());

app.use(cookieParser());

//Protection
app.use(session({
  secret: 'mysupersecret', 
  resave: false, 
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection}),
  cookie: { maxAge: 180 * 60 * 1000} 
}));
//Flash message, initialization of passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  //login variable is now accessible by all pages in views
  res.locals.login = req.isAuthenticated();
  //Session is being made available to all views
  res.locals.session = req.session;
  next();
});

//If slash user, then redirect to user routes (pages) ORDER IS IMPORTANT, /user MUST COME BEFORE /
app.use('/user', userRoutes);

//If just slash, then redirect to homepage
app.use('/', routes);
//app.use('/test', routes);
app.use('/beverages', routes);
app.use('/breadandbakeryseeder', routes);
app.use('/dairy', routes);
app.use('/personalcare', routes);
app.use('/fruits', routes);

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
  res.render('error');
});

module.exports = app;
