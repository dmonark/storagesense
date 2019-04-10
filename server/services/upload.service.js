const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: process.env.S3_SECERT,
  accessKeyId: process.env.S3_KEY,
  region: 'us-east-1'
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
		s3,
    bucket: 'storage-sense',
		ACL: 'public-read',
    key: function (req, file, cb) {
			cb(null, Date.now().toString() + ".jpg")
    }
  }, console.log("OKAY"))
});

module.exports = upload;