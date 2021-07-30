const services = require("../../services");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Login the User
// verify if the user's email exist in the DB or not
// compare the saved passwords
// generate token

(exports.loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    const currentUserEmail = await User.findOne({ email });
    if (currentUserEmail) {
      await bcrypt.compare(
        password,
        currentUserEmail.password,
        (err, passwordMatch) => {
          if (err) throw err;
          if (passwordMatch == true) {
            jwt.sign(
              { currentUserEmail },
              process.env.SECRETKEY,
              { expiresIn: "7d" },

              function (err, token) {
                if (err) throw err;
                res.cookie("token", token, { expiresIn: "7d" });
                res.status(200).json({
                  message: "the user login successfully",
                  token: token,
                });
              }
            );
          } else {
            res.status(406).json({ status: false, message: "wrong password " });
          }
        }
      );
    } else {
      res.status(406).json({ status: false, message: " email does not exist" });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err });
    console.log(err);
  }
}),
  (exports.signout = (req, res) => {
    res.clearCookie("token");
    res
      .status(200)
      .json({ status: true, message: "signout successfully...! " });
  });
