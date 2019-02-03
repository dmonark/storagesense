const usersController = require('../controllers').users;
const devicesController = require('../controllers').devices;
const tempsController = require('../controllers').temps;

const authServices = require('../services/auth.service');

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
	app.post('/api/temp', dataValidator.create, tempsController.create);
	app.get('/api/temp', authServices.checkToken, dataValidator.list, tempsController.index);
};
