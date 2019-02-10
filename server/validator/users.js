module.exports = {
  create(req, res, next) {

    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!req.body.name)
      return res.status(422).send({
        message: 'Name is missing',
      });
    else if (!req.body.email)
      return res.status(422).send({
        message: 'Email is missing',
      });
    else if (!emailRegex.test(String(req.body.email).toLowerCase()))
      return res.status(422).send({
        message: 'Email is not valid',
      });
    else if (!req.body.mobile)
      return res.status(422).send({
        message: 'Mobile is missing',
      });
    else if (req.body.mobile.length != 10)
      return res.status(422).send({
        message: 'Mobile is not valid',
      });
    else if (!req.body.password)
      return res.status(422).send({
        message: 'Password is missing',
      });
    else
      next();
  },

  login(req, res, next) {
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!req.body.email)
      return res.status(422).send({
        message: 'Email is missing',
      });
    else if (!emailRegex.test(String(req.body.email).toLowerCase()))
      return res.status(422).send({
        message: 'Email is not in valid format',
      });
    else if (!req.body.password)
      return res.status(422).send({
        message: 'Password is missing',
      });
    else
      next();
  }
};