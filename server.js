const dotenv = require('dotenv');
const mongoose = require('mongoose');

//  register this listener before any code execution in app begins.
process.on('uncaughtException', (error) => {
    console.log(`Error occured \n ${error.name} ${error.message}`);
    process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT: ${process.env.PORT}`);
});

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Mongo DB connected succesfully'));

process.on('unhandledRejection', (error) => {
    console.log(`Error occured \n ${error.name} ${error.message}`);
    server.close(() => {
        process.exit(1);
    });
});
