const upload = require('../models').upload;
const uploadImage = require('../services/upload.service');

const singleUpload = uploadImage.single('image');

module.exports = {
  create(req, res) {
		singleUpload(req, res, function(err) {
			if (err) {
				return res.status(422).send({err});
			}
			return upload
				.create({
					name: "Uploaded Image",
					location: req.file.location,
					userId: req.decoded.uid
				})
				.then((data) => res.status(201).send(data))
				.catch((error) => res.status(500).send(error));
		});
  },
	list(req, res) {
		let limit = 10;
    let offset = 0;

    let page = req.params.page;
    offset = limit * (page - 1);
		
		return upload
      .findAll({
				offset: offset,
        limit: limit,
        where: {
          userId: req.decoded.uid
        },
      })
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(500).send(error));
	},
	index(req, res) {
		return upload
      .findOne({
        where: {
					id: req.params.id,
					userId: req.decoded.uid
        },
      })
      .then((data) => {
				if(data)
					res.status(200).send(data)
				else
					res.status(404).send({message: 'Image not found'})
			})
      .catch((error) => res.status(500).send(error));
	},
	update(req, res) {
		return upload
			.update({ 
					result: req.body.result
				},{ 
					where: {
						id: req.params.id
					}	
			})
			.then((data) => res.status(200).send(data))
      .catch((error) => res.status(500).send(error));
	},
	unfinished(req, res) {
		return upload
      .findAll({
				where: {
          result: null
        },
      })
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(500).send(error));
	}
};