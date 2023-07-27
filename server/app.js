const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const path = require('path');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use('/healthcheck', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.use(express.static("build"));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

module.exports = app;
