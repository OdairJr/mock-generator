const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../api/routes');
const { logs } = require('./vars');
const error = require('../api/middlewares/error');
const path = require('path');

/**
* Express instance
* @public
*/
const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors({
    origin: 'http://localhost:70',
    credentials: true
}));
app.use(express.static(path.join(__dirname, '../app')));
// mount api routes
app.use('/', routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
