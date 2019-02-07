const usersController = require('../controllers').users;
const devicesController = require('../controllers').devices;
const dataController = require('../controllers').data;

const authServices = require('../services/auth.service');
const entityServices = require('../services/entity.service');

const usersValidator = require('../validator').users;
const devicesValidator = require('../validator').devices;
const dataValidator = require('../validator').data

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
	
};
