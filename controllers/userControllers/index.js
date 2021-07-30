module.exports = {
  create: require("./registerUser.controller"),
  authentificate: require("./authUser.controller"),
  get: require("./getUser.controller"),
  update: require("./updateUser.controller"),
  delete: require("./deleteUser.controller"),
};
