var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var trackingsRouter = require('./routes/tracking');

var app = express();

// Serve static files from the Vue.js build directory
app.use(express.static(path.join(__dirname, 'vue-sso-project/dist')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/trackings', trackingsRouter);

// Serve the Vue.js app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'vue-sso-project/dist/index.html'));
});

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

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/logistic_manage')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on post ${PORT}`));

module.exports = app;
