const User = require("../../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
  async updateUser(req, res) {
    try {
      let user = req.body;
      let password = req.body.password;
      let { id } = req.params;

      let updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: { ...user },
        },
        { new: true }
      );
      res.status(200).json({
        status: true,
        message: " User was updated successfully",
        data: updatedUser,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, err });
    }
  },
};

// module.exports = {
//   async updateUser(req, res) {
//     try {
//       let user = req.body;
//       let { id } = req.params;

//       let existingUser = await services.userServices.get.getUserById(id);

//       if (existingUser) {
//         await services.userServices.update.updateUser(
//           id,
//           firstName,
//           lastName,
//           userName,
//           email,
//           phoneNumber,
//           password,
//           confirmPassword,
//           role
//         );

//         existingUser = await services.userServices.get.getUserById(id);

//         res.status(200).json({
//           status: true,
//           message: "The user was updated",
//           data: existingUser,
//         });
//       } else {
//         res.status(404).json({ status: false, message: "User not exist" });
//       }
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ status: false, message: err });
//     }
//   },
// };
