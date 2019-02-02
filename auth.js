const jwt = require('jsonwebtoken');

const addUser = async (req, res, next) => {
  const token = req.headers['x-token'];
  if (token) {
    try {
			const { user } = jwt.verify(token, SECRET);
			req.user = user;
    } catch (err) {
			res.status(501).send({message: err});	
    }
  } else {
		res.status(401).send({message: 'Auth token not found'});
	}
  next();
};