const usersController = require('../controllers').users;
const devicesController = require('../controllers').devices;
const dataController = require('../controllers').data;
const stocksController = require('../controllers').stocks;
const actionsController = require('../controllers').actions;

const authServices = require('../services/auth.service');
const entityServices = require('../services/entity.service');

const usersValidator = require('../validator').users;
const devicesValidator = require('../validator').devices;
const dataValidator = require('../validator').data
const stocksValidator = require('../validator').stocks;
const actionsValidator = require('../validator').actions;

module.exports = (app) => {
  //users
  app.post('/api/register', usersValidator.create, usersController.create);
  app.post('/api/login', usersValidator.login, usersController.login);
  app.get('/api/profile', authServices.checkToken, usersController.profile);

  //devices
  app.post('/api/devices', authServices.checkToken, devicesValidator.create, devicesController.create);

  //temps
  app.post('/api/temps', dataValidator.create, entityServices.tempIdentifier, dataController.create);
  app.get('/api/temps', authServices.checkToken, dataValidator.list, entityServices.tempIdentifier, dataController.index);

  //moistures
  app.post('/api/moistures', dataValidator.create, entityServices.moistureIdentifier, dataController.create);
  app.get('/api/moistures', authServices.checkToken, dataValidator.list, entityServices.moistureIdentifier, dataController.index);

  //gases
  app.post('/api/gases', dataValidator.create, entityServices.gasIdentifier, dataController.create);
  app.get('/api/gases', authServices.checkToken, dataValidator.list, entityServices.gasIdentifier, dataController.index);

  //stocks
  app.post('/api/stocks', authServices.checkToken, stocksValidator.create, stocksController.create);
  app.get('/api/stocks/summary', authServices.checkToken, stocksController.summary);
  app.get('/api/stocks/:page', authServices.checkToken, stocksValidator.list, stocksController.list);
  app.delete('/api/stocks/:id', authServices.checkToken, stocksValidator.delete, stocksController.delete);

	app.post('/api/actions', authServices.checkToken, actionsValidator.create, actionsController.create);
  app.get('/api/actions/:page', authServices.checkToken, actionsController.list);
	app.get('/api/actions', authServices.checkToken, actionsValidator.latest, actionsController.latest);
};