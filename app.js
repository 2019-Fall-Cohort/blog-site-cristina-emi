const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sequelize = require('./src/utils/database')

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const postRouter = require('./src/routes/post-router');
const authorRouter = require('./src/routes/author-router');
const categoryRouter = require('./src/routes/category-router');
const tagRouter = require('./src/routes/tag-router');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/allposts', postRouter);
app.use('/allposts/:id', postRouter);
app.use('/allposts/new', postRouter);
app.use('/allauthors', authorRouter);
app.use('/allauthors/new', authorRouter);
app.use('/allcategories', categoryRouter);
app.use('/allcategories/new', categoryRouter);
app.use('/alltags', tagRouter);
app.use('/alltags/new', tagRouter);

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

sequelize.sync()
  .then(() => console.log('DB Connected'))
  .catch(console.error);

module.exports = app;