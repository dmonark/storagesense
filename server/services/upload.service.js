const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: 'I2le+AMRWsAkoFoeP5eWRXesP2qqga4jeZcCPlyd',
  accessKeyId: 'AKIAIE7TO7BPIBUC4M2Q',
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
  })
});

module.exports = upload;