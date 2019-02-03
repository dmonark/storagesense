let jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {
  let token = req.headers['x-token'];
	
  if (token) {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        return res.status(401).send({
					message: 'Token not valid',
				});
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({
      message: 'Token not provided',
		});
  }
};

module.exports = {
  checkToken: checkToken
}