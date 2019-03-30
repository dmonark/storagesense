module.exports = {
  create(req, res, next) {
		var whatList = ['temp', 'moisture', 'gas']
		var originList = ['self', 'app', 'station']
    if (!req.body.origin)
      return res.status(422).send({
        message: 'Origin is missing',
      });
    else if (originList.indexOf(req.body.origin) < 0)
      return res.status(422).send({
        message: 'Origin is not valid',
      });
    else if (!req.body.what)
      return res.status(422).send({
        message: 'Type is missing',
      });
    else if (whatList.indexOf(req.body.what) < 0)
      return res.status(422).send({
        message: 'Type is not valid',
      });
    else if (!req.body.data)
      return res.status(422).send({
        message: 'Metadata is missing',
      });
		else if(!req.body.deviceID)
			return res.status(422).send({
        message: 'Device ID is missing',
      });
    else
      next();
  },

  latest(req, res, next) {
    var whatList = ['temp', 'moisture', 'gas']
		if (!req.query.what)
      return res.status(422).send({
        message: 'Type is missing',
      });
    else if (whatList.indexOf(req.query.what) < 0)
      return res.status(422).send({
        message: 'Type is not valid',
      });
		else if(!req.query.deviceID)
			return res.status(422).send({
        message: 'Device ID is missing',
      });
		else if(isNaN(req.query.deviceID))
			return res.status(422).send({
        message: 'Device ID is not valid',
      });
    else
      next();
  }
};