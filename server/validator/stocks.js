module.exports = {
  create(req, res, next) {
		var typeList = ['add', 'remove']
    if (!req.body.name)
      return res.status(422).send({
        message: 'Name is missing',
      });
    else if (!req.body.qty)
      return res.status(422).send({
        message: 'Qty is missing',
      });
    else if (isNaN(req.body.qty))
      return res.status(422).send({
        message: 'Qty is not valid',
      });
    else if (!req.body.type)
      return res.status(422).send({
        message: 'Type is missing',
      });
    else if (typeList.indexOf(req.body.type) < 0)
      return res.status(422).send({
        message: 'Type is not valid',
      });
    else
      next();
  },

  list(req, res, next) {
    if (isNaN(req.params.page))
      return res.status(404).send({
        message: 'Not found.',
      });
    else
      next();
  },

  delete(req, res, next) {
    if (isNaN(req.params.id))
      return res.status(404).send({
        message: 'Not found.',
      });
    else
      next();
  }
};