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
	app.post('/api/device', authServices.checkToken, devicesValidator.create, devicesController.create);
	
	//temp
	app.post('/api/temp', dataValidator.create, entityServices.tempIdentifier, dataController.create);
	app.get('/api/temp', authServices.checkToken, dataValidator.list, entityServices.tempIdentifier, dataController.index);
	
	//moisture
	app.post('/api/moisture', dataValidator.create, entityServices.moistureIdentifier, dataController.create);
	app.get('/api/moisture', authServices.checkToken, dataValidator.list, entityServices.moistureIdentifier, dataController.index);
	
	//co2
	app.post('/api/co', dataValidator.create, entityServices.cogasIdentifier, dataController.create);
	app.get('/api/co', authServices.checkToken, dataValidator.list, entityServices.cogasIdentifier, dataController.index);
	
};
