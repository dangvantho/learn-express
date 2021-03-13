const util = require('util');
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

var storage = new GridFsStorage({
  url: "mongodb+srv://dangvantho:dangvanthopro@cluster0.xluxf.mongodb.net/images",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    let form= req.body
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "news",
      filename: `${Date.now()}-${file.originalname}`,
      metadata: {
        title: form.title || 1,
        content: form.content || 1,
      }
    };
  }
});

var uploadFile = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;