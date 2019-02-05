module.exports = {
  create(req, res, next) {
		
		var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		
		if(!req.query.name)
			return res.status(422).send({
				message: 'Name is not proviced',
			});
		else if(!req.query.email)
			return res.status(422).send({
				message: 'Email is not proviced',
			});
		else if(!emailRegex.test(String(req.query.email).toLowerCase()))
			return res.status(422).send({
				message: 'Email not valid',
			});
		else if(!req.query.mobile)
			return res.status(422).send({
				message: 'Mobile is not provived',
			});
		else if(req.query.mobile.length != 10)
			return res.status(422).send({
				message: 'Mobile not valid',
			});
		else if(!req.query.password)
			return res.status(422).send({
				message: 'Password is not provided',
			});
		else
			next();
	},
	
	login(req, res, next) {
		var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		
		if(!req.query.email)
			return res.status(422).send({
				message: 'Email is not proviced',
			});
		else if(!emailRegex.test(String(req.query.email).toLowerCase()))
			return res.status(422).send({
				message: 'Email not valid',
			});
		else if(!req.query.password)
			return res.status(422).send({
				message: 'Password is not provided',
			});
		else
			next();
	}
};