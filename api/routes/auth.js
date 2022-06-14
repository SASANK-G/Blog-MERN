const express = require("express");
// const User = require("../models/User");
const router = express.Router();
// const bcrypt = require("bcrypt");
const authController = require("../controllers/authController");

router.post("/register", authController.authRegister);
router.post("/login", authController.authLogin);

//REGISTER

// router.post("/register", async (req, res) => {
//   const salt = await bcrypt.genSalt(10);
//   const hashedPass = await bcrypt.hash(req.body.password, salt);
//   try {
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedPass,
//     });
//     const user = await newUser.save();
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     !user && res.status(400).json("Wrong credentials!");

//     const validated = await bcrypt.compare(req.body.password, user.password);
//     !validated && res.status(400).json("Wrong credentials!");

//     //return other params except password
//     const { password, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;