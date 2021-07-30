const { check, validationResult } = require("express-validator");
const User = require("../models/User");

exports.validateRegisterRequest = [
  check("firstName").notEmpty().withMessage("firstName is required"),
  check("lastName").notEmpty().withMessage("lastName is required"),
  check("email")
    .notEmpty()
    .isEmail()
    .normalizeEmail()
    .withMessage("valid email is required"),
  // .custom((email) => {
  //   const  currentUserEmail = services.userServices.get.getUserByEmail({
  //     email,
  //   });
  //   if ( currentUserEmail) {
  //     throw new Error("Email already in use");
  //   }
  //   return true;
  // }),
  check("phoneNumber")
    .notEmpty()
    .isMobilePhone()
    .withMessage("valid phoneNumber is required"),
  // .custom(async (phoneNumber) => {
  //   const existingPhoneNumber =
  //     services.userServices.get.getUserByPhoneNumber({ phoneNumber });
  //   if (existingPhoneNumber) {
  //     throw new Error("phoneNumber already in use");
  //   }
  // }),
  check("password")
    .custom((password) => {
      if (
        password &&
        password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ) {
        return true;
      }
    })
    .withMessage(
      "Password must contain 8 characters and atleast 1 number, 1 uppercase and lowercase letter."
    ),
];

exports.validateSigninRequest = [
  check("email").isEmail().withMessage("Valid Email is required"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array() });
  }
  next();
};

exports.validateDuplication = async (req, res, next) => {
  try {
    let { email, phoneNumber, password, confirmPassword } = req.body;
    const existingPhoneNumber = await User.findOne({ phoneNumber });

    const currentUserEmail = await User.findOne({ email });

    //  checking if e-mail is in use

    if (currentUserEmail)
      return res.status(406).json({
        status: false,
        message: "Email already in use",
      });

    //  checking if phoneNumber is in use
    if (existingPhoneNumber)
      return res.status(406).json({
        status: false,
        message: "PhoneNumber already in use ",
      });

    // make the user sure from the password

    if (password !== confirmPassword)
      return res.status(400).json({
        status: false,
        message: "verify the password",
      });

    next();
  } catch (err) {
    res.status(500).json({ status: false, message: err });
    console.log(err);
  }
};
