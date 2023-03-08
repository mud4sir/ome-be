const express = require('express');
const morgan = require('morgan');

// const globalErrorHandler = require('./controller/errorController');
// const AppError = require('./utils/appError');
// const tourRoute = require('./routes/tourRoute');
const userRoute = require('./routes/userRoute');

const app = express();

const isDevEnv = process.env.NODE_ENV === 'development';
if (isDevEnv) {
  app.use(morgan('dev'));
}

app.use(express.json());

app.post('/', (req, res) => {
  res.json({ message: `You can post on this endpoint` });
});

// app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/user', userRoute);

// handle undefined routes
// app.all('*', (req, res, next) => {
//   next(new AppError(`Route ${req.originalUrl} don't exists on server`, 404));
// });

// app.use(globalErrorHandler);

module.exports = app;
