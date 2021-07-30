const Auction = require("../../models/Auction");
const mongoose = require("mongoose");

module.exports = {
  async createAuction(req, res) {
    try {
      let {
        category,
        title,
        imageCover,
        images,
        location,
        shortDesc,
        marketPrice,
        startingPrice,
        beginDate,
        endDate,
        offerDescription,
        validity,
        moreInfo,
      } = req.body;

      let createdAuction = await Auction.create({
        _id: new mongoose.Types.ObjectId(),
        category,
        title,
        imageCover,
        images,
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
      res.status(200).json({
        status: true,
        message: "the auction was created successfully",
        createdAuction,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, err });
    }
  },
};
