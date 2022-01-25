const path = require('path');
const express = require('express');
const morgan = require('morgan');

const viewRouter = require('./routes/viewRoutes');
// const userRouter = require('./routes/userRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

// Routes
app.use('/', viewRouter);
// app.use('/api/v1/users', userRouter);

// If no valid route was found
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

module.exports = app;
