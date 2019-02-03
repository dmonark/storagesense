const device = require('../models').device;

module.exports = {
  create(req, res) {
    return device
      .create({
        name: req.query.name,
				lan: req.query.lan,
				long: req.query.long,
				address: req.query.address,
				userId: req.decoded.uid
      })
      .then((device) => res.status(201).send(device))
      .catch((error) => res.status(400).send(error));
	}
};