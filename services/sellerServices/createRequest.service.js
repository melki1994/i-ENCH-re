const Seller = require("../../models/Seller");
const mongoose = require("mongoose");
module.exports = {
  async createRequest(
    firstName,
    lastName,
    companyName,
    email,
    phoneNumber,
    fullAdress,
    website,
    offerDescription
  ) {
    try {
      return await Seller.create({
        _id: new mongoose.Types.ObjectId(),
        firstName,
        lastName,
        companyName,
        email,
        phoneNumber,
        fullAdress,
        website,
        offerDescription,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
