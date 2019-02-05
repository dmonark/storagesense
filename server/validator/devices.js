module.exports = {
  create(req, res, next) {
		
		if(!req.query.name)
			return res.status(422).send({
				message: 'Name is not proviced',
			});
		else if(!req.query.lan)
			return res.status(422).send({
				message: 'Lan is not proviced',
			});
		else if(!req.query.long)
			return res.status(422).send({
				message: 'Lan is not proviced',
			});
		else if(!req.query.address)
			return res.status(422).send({
				message: 'Address is not proviced',
			});
		else
			next();
	}
};