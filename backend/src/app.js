/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(router);

module.exports = app;