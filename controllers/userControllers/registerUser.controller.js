const User = require("../../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const sendMail = require("../../middlewares/sendEmail");
// const { google } = require("googleapis");
// const { OAuth2 } = google.auth;

// register User

module.exports = {
  async registerUser(req, res) {
    try {
      let {
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        role,
      } = req.body;

      // crypt the password
      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = await User.create({
        _id: new mongoose.Types.ObjectId(),
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        password: passwordHash,
        role,
      });
      // console.log(password);
      // console.log(newUser.password);
      // const { CLIENT_URL } = process.env;
      // const activation_token = createActivationToken(newUser);

      // const url = `${CLIENT_URL}/user/activate/${activation_token}`;
      // sendMail(email, url, "Verify your email address");

      res.status(201).json({
        status: true,
        message: "A new user has been registered",
        data: newUser,
      });
    } catch (err) {
      res.status(500).json({ status: false, message: err });
      console.log(err);
    }
  },
};

// const createAccessToken = (payload) => {
//   return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "20m",
//   });
// };

// const createRefreshToken = (payload) => {
//   return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: "1d",
//   });
// };

// const createActivationToken = (newUser) => {
//   return jwt.sign({ newUser }, process.env.SECRETKEY, {
//     expiresIn: "5m",
//   });
// };
