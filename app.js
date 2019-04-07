const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors({
  origin: '*',
	allowedHeaders: ['x-token', 'Content-Length', 'Content-Type']
}));

require('./server/routes')(app);
app.get('*', (req, res) => res.status(404).send({
  message: 'Not found.',
}));

module.exports = app;