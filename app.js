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
	exposedHeaders: ['x-token', 'Content-Length', 'Content-Type']
}));

app.options('*', (req, res) => res.status(200).send({
  message: 'OKAY',
}));

require('./server/routes')(app);

app.get('*', (req, res) => res.status(404).send({
  message: 'Not found.',
}));

module.exports = app;