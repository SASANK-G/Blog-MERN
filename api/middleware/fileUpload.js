const multer = require("multer");
const uploadMiddle = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });

  //   try {
  //     return upload.single("file");
  //   } catch (err) {
  //     console.log("file", err);
  //   }
  return upload.single("file");
};

module.exports = uploadMiddle;
