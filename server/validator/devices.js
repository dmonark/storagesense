module.exports = {
  create(req, res, next) {

    if (!req.body.name)
      return res.status(422).send({
        message: 'Name is missing',
      });
    else if (!req.body.lan)
      return res.status(422).send({
        message: 'Latitude is missing',
      });
    else if (!req.body.long)
      return res.status(422).send({
        message: 'Longitude is missing',
      });
    else if (!req.body.address)
      return res.status(422).send({
        message: 'Address is missing',
      });
    else
      next();
  }
};