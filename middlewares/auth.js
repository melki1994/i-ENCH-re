const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      decodedData = jwt.verify(token, process.env.SECRETKEY);
    }
    req.user = decodedData.currentUserEmail;
    // console.log(req.user.role);
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({
      message: "you need to sign in",
    });
  }
};

// exports.restrictTo = (...role) => {
//   return (req, res, next) => {
//     try {
//       if (role.includes(req.user.role)) {
//         next();
//       }
//     } catch (err) {
//       console.log(err);
//       res.status(403).json({
//         message: "you need to sign in",
//       });
//     }
//   };
// };

exports.restrictTo = (...role) => {
  return (req, res, next) => {
    // role user should be inside the array of role
    if (!role.includes(req.user.role)) {
      return next(
        res.status(403).json({
          message: "not allowed",
        })
      );
    }
    next();
  };
};
