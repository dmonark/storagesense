const user = require('../models').user;
const device = require('../models').device;
const jwt = require('jsonwebtoken');

module.exports = {
  create(req, res) {
    return user
      .create({
        name: req.body.name,
        password: req.body.password,
        mobile: req.body.mobile,
        email: req.body.email
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(500).send(error));
  },

  login(req, res) {
    return user
      .findOne({
        where: {
          email: req.body.email,
          password: req.body.password
        },
        attributes: ['id', 'name', 'email', 'mobile']
      })
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            message: 'Not valid password',
          });
        } else {
          var secret = 'secret';
          var token = jwt.sign({
            uid: user.id
          }, secret, {
            expiresIn: '1y',
            algorithm: 'HS256'
          });
          return res.status(200).send({
            token: token,
            user: user
          });
        }
      })
      .catch((error) => res.status(500).send(error));
  },

  profile(req, res) {
    return user
      .findById(req.decoded.uid, {
        include: [{
          model: device,
          as: 'devices',
          attributes: ['id', 'name', 'lan', 'long', 'address']
        }],
        attributes: ['id', 'name', 'email', 'mobile']
      })
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            message: 'User not found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(500).send(error));
  }
};