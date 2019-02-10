let tempIdentifier = (req, res, next) => {
  req.body.whichEntity = 0;
  next();
};

let moistureIdentifier = (req, res, next) => {
  req.body.whichEntity = 1;
  next();
};

let gasIdentifier = (req, res, next) => {
  req.body.whichEntity = 2;
  next();
};

module.exports = {
  tempIdentifier,
  moistureIdentifier,
  gasIdentifier
}