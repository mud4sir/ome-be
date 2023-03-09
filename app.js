const express = require('express');
const morgan = require('morgan');
const userRoute = require('./routes/userRoute');
const AdvertisingRoute = require('./routes/advertisingRoute');

const app = express();

const isDevEnv = process.env.NODE_ENV === 'development';
if (isDevEnv) {
    app.use(morgan('dev'));
}

app.use(express.json());

app.post('/', (req, res) => {
    res.json({ message: `You can post on this endpoint` });
});

app.use('/api/v1/user', userRoute);
app.use('/api/v1/ad', AdvertisingRoute);

module.exports = app;
