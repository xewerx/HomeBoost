const express = require('express');
const path = require('path');
const errorsHandler = require('./middlewares/errors');
const routes = require('./routes/routes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


app.use(errorsHandler.notFound);
app.use(errorsHandler.catchErrors);

module.exports = app;