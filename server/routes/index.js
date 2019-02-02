const usersController = require('../controllers').users
const authServices = require('../services/auth.service');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
	app.post('/api/users', usersController.create);
	app.post('/api/login', usersController.login);
	app.get('/api/profile', authServices.checkToken, usersController.profile);
};
