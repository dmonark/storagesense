const device = require('../models').device;
const dataList = [require('../models').temp, require('../models').moisture, require('../models').gas];

module.exports = {
  create(req, res) {
    return dataList[req.body.whichEntity]
      .create({
        data: req.query.data,
				deviceId: req.query.deviceID,
      })
      .then((data) => res.status(201).send(data))
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
					deviceIndex = 0;
				
				var startDate = req.query.start + "T00:00:01.000Z";
				var endDate = req.query.end + "T23:59:59.827Z";
				
				return dataList[req.body.whichEntity].findAll({
					where: {
						deviceId: devices[deviceIndex].id,
						createdAt: { 
							"$between": [startDate,endDate]
						}
					},
					attributes: ['id', 'data', 'createdAt']
				})
				.then((data) => res.status(200).send(data))
				.catch((error) => res.status(400).send(error));
			
			})
      .catch((error) => res.status(400).send(error));
	}
};