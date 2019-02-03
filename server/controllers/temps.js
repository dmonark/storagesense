const temp = require('../models').temp;
const device = require('../models').device;

module.exports = {
  create(req, res) {
    return temp
      .create({
        data: req.query.data,
				deviceId: req.query.deviceID,
      })
      .then((temp) => res.status(201).send(temp))
      .catch((error) => res.status(400).send(error));
	},
	
	index(req, res) {
		return device
			.findAll({
				where: {
					userId: req.decoded.uid
				},
				attributes: ['id']
			})
			.then((devices) => {
				let deviceIndex = devices.findIndex(x => x.id == req.query.deviceID);
				
				if(deviceIndex == -1)
					return res.status(400).send({
            message: 'Coundnt find device',
					});
				
				if(!req.query.start || !req.query.end)
					return res.status(400).send({
            message: 'Start and end not found',
					});
				
				var startDate = req.query.start + "T00:00:01.000Z";
				var endDate = req.query.end + "T23:59:59.827Z";
				
				return temp.findAll({
					where: {
						deviceId: devices[deviceIndex].id,
						createdAt: { 
							"$between": [startDate,endDate]
						}
					},
					attributes: ['id', 'data', 'createdAt']
				})
				.then((temp) => res.status(201).send(temp))
				.catch((error) => res.status(400).send(error));
			
			})
      .catch((error) => res.status(400).send(error));
	}
};