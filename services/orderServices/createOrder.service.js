const Order = require("../../models/Order");
const mongoose = require("mongoose");
module.exports = {
  async createOrder(auction, user) {
    try {
      return await Order.create({
        _id: new mongoose.Types.ObjectId(),
        auction,
        title,
        pictures,
        location,
        shortDesc,
        marketPrice,
        startingPrice,
        beginDate,
        endDate,
        offerDescription,
        validity,
        moreInfo,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
