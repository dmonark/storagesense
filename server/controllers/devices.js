const device = require('../models').device;

module.exports = {
  create(req, res) {
    return device
      .create({
				name: req.body.name,
				lan: req.body.lan,
				long: req.body.long,
				address: req.body.address,
				userId: req.decoded.uid
      })
      .then((device) => res.status(201).send(device))
      .catch((error) => res.status(500).send(error));
	}
};