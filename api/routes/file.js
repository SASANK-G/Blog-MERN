const router = require("express").Router();
const uploadMiddle = require("../middleware/fileUpload");

router.post("/", uploadMiddle(), (req, res) => {
  res.status(200).json("File has been uploaded");
});

module.exports = router;
