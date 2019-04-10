const action = require('../models').action;
const device = require('../models').device;

module.exports = {
  create(req, res) {
		return device.
			findAll({
				where: {
          userId: req.decoded.uid
        },
				attributes: ['id']
			})
			.then((devices) => {
				let deviceIndex = devices.findIndex(x => x.id == req.body.deviceID);

        if (deviceIndex == -1)
          deviceIndex = 0;
				
				return action
					.create({
						origin: req.body.origin,
						what: req.body.what,
						metadata: req.body.data,
						deviceId: devices[deviceIndex].id
					})
					.then((data) => res.status(201).send(data))
					.catch((error) => res.status(500).send(error))
					
			})
      .catch((error) => res.status(500).send(error));	
  },

	secertCreate(req, res) {
		return action
			.create({
				origin: 'station',
				what: req.body.what,
				metadata: req.body.data,
				deviceId: req.body.id
			})
			.then((data) => res.status(201).send(data))
			.catch((error) => res.status(500).send(error))
	},
	
  latest(req, res) {
    return device.
			findAll({
				where: {
          userId: req.decoded.uid
        },
				attributes: ['id']
			})
			.then((devices) => {
				let deviceIndex = devices.findIndex(x => x.id == req.query.deviceID);

        if (deviceIndex == -1)
          deviceIndex = 0;
				
				return action
					.findOne({
						where: {
							what: req.query.what,
							deviceId: devices[deviceIndex].id
						},
						order: [[ 'createdAt', 'DESC' ]],
					})
					.then((data) => res.status(200).send(data))
					.catch((error) => res.status(500).send(error))
			})
      .catch((error) => res.status(500).send(error));
  },
	
	list(req, res) {
		return device.
			findAll({
				where: {
          userId: req.decoded.uid
        },
				attributes: ['id']
			})
			.then((devices) => {
				
				let limit = 10;
				let offset = 0;

				let page = req.params.page;
				offset = limit * (page - 1);
				
				whereList = {}
				
				let deviceIndex = devices.findIndex(x => x.id == req.query.deviceID);

        if (deviceIndex == -1)
          deviceIndex = 0;
				
				whereList['deviceId'] = devices[deviceIndex].id
				
				if(req.query.what !== "all")
					whereList['what'] = req.query.what
				
				if(req.query.origin)
					whereList['origin'] = req.query.origin
				
				return action
					.findAll({
						offset: offset,
						limit: limit,
						where: whereList,
						order: [
							['id', 'DESC']
						]
					})
					.then((data) => res.status(200).send(data))
					.catch((error) => res.status(500).send(error))
			})
      .catch((error) => res.status(500).send(error));
	}
};