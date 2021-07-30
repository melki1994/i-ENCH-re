const User = require("../../models/User");

module.exports = {
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const existingUser = await User.findById(id);
      if (existingUser) {
        await User.findByIdAndRemove(id);
        res.status(200).json({ status: true, message: "The user was removed" });
      } else {
        res.status(404).json({ status: false, message: "User Not Found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};
