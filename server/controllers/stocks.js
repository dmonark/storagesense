const stock = require('../models').stock;
var sequelize = require("sequelize");

module.exports = {
  create(req, res) {
    if (req.body.type == "add") {
      return stock
        .create({
          name: req.body.name,
          qty: req.body.qty,
          type: req.body.type,
          userId: req.decoded.uid
        })
        .then((data) => res.status(201).send(data))
        .catch((error) => res.status(500).send(error));
    } else if (req.body.type == "remove") {
      return stock
        .findAll({
          where: {
            userId: req.decoded.uid,
            name: req.body.name
          },
          attributes: [
            [sequelize.fn('sum', sequelize.col('qty')), 'total']
          ],
          raw: true,
        })
        .then((data) => {
          if (data[0].total >= req.body.qty)
            return stock
              .create({
                name: req.body.name,
                qty: req.body.qty * -1,
                type: req.body.type,
                userId: req.decoded.uid
              })
              .then((data) => res.status(201).send(data))
              .catch((error) => res.status(500).send(error));
          else
            return res.status(400).send({
              message: 'Not in stock'
            })
        })
        .catch((error) => res.status(500).send(error));
    }
  },

  summary(req, res) {
    return stock
      .findAll({
        where: {
          userId: req.decoded.uid
        },
        attributes: ['name', [sequelize.fn('sum', sequelize.col('qty')), 'total']],
        raw: true,
        group: ['name']
      })
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(500).send(error));
  },

  list(req, res) {
    let limit = 10;
    let offset = 0;

    let page = req.params.page;
    offset = limit * (page - 1);

    let whereList = {}
    whereList['userId'] = req.decoded.uid

    if (req.body.name)
      whereList['name'] = req.body.name

    if (req.body.type)
      whereList['type'] = req.body.type

    if (req.body.startDate && req.body.endDate) {
      whereList['createdAt'] = {}
      whereList['createdAt']['gte'] = req.body.startDate + "T00:00:00.000Z"
      whereList['createdAt']['lte'] = req.body.endDate + "T24:00:00.000Z"
    }
    /* else if(req.body.startDate){
    			whereList['createdAt'] = {}
    			whereList['createdAt']['gte'] = req.body.startDate + "T00:00:00.000Z"
    		} else if(req.body.endDate){
    			whereList['createdAt'] = {}
    			whereList['createdAt']['lte'] = req.body.endDate + "T24:00:00.000Z"
    		}*/

    return stock
      .findAll({
        offset: offset,
        limit: limit,
        where: whereList,
        order: [
          ['id', 'DESC']
        ],
        attributes: ['id', 'name', 'qty', 'type', 'createdAt']
      })
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(500).send(error));
  }
};