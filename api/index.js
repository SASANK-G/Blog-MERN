const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

const fileRoute = require("./routes/file");
// const path = require("path");

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || "5000";

//db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("MongoDb connected"))
  .catch((err) => console.log(err));

// //multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, "mypic3.jpg");
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", uploadMiddle(), (req, res) => {
//   try {
//     res.status(200).json("File has been uploaded");
//   } catch (err) {
//     res.json(err);
//   }
// });

// app.use("/images", express.static(path.join(__dirname, "/images")));
//routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/upload", fileRoute);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
