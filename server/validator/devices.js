module.exports = {
  create(req, res, next) {
		
		if(!req.body.name)
			return res.status(422).send({
				message: 'Name is not proviced',
			});
		else if(!req.body.lan)
			return res.status(422).send({
				message: 'Lan is not proviced',
			});
		else if(!req.body.long)
			return res.status(422).send({
				message: 'Lan is not proviced',
			});
		else if(!req.body.address)
			return res.status(422).send({
				message: 'Address is not proviced',
			});
		else
			next();
	}
};