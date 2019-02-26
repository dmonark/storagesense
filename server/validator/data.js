module.exports = {
  create(req, res, next) {

    if (!req.body.data)
      return res.status(422).send({
        message: 'Data is missing',
      });
    else if (!req.body.deviceID)
      return res.status(422).send({
        message: 'Device ID is missing',
      });
    else
      next();
  },

  list(req, res, next) {

    if (!req.query.start)
      return res.status(422).send({
        message: 'Start Date is missing',
      });
    else if (!req.query.end)
      return res.status(422).send({
        message: 'End Date is missing',
      });
    else
      next();
  }
};