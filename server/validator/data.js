module.exports = {
  create(req, res, next) {
		
		if(!req.query.data)
			return res.status(422).send({
				message: 'Data is not proviced',
			});
		else if(!req.query.deviceID)
			return res.status(422).send({
				message: 'Device ID is not proviced',
			});
		else
			next();
	},
	
	list(req, res, next) {
		
		if(!req.query.start)
			return res.status(422).send({
				message: 'Start Date is not provided',
			});
		else if(!req.query.end)
			return res.status(422).send({
				message: 'End Date is not provided',
			});
		else
			next();
	}
};