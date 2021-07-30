const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const auctionSchema = new mongoose.Schema(
  {
    auctionId: {
      type: Schema.Types.ObjectId,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    imageCover: {
      type: String,
    },
    images: [String],
    location: {
      type: String,
      required: true,
      trim: true,
    },
    shortDesc: {
      type: String,
      required: true,
      trim: true,
    },
    marketPrice: {
      type: String,
      required: true,
      trim: true,
    },
    startingPrice: {
      type: String,
      required: true,
      trim: true,
    },
    beginDate: {
      type: Date,
      required: true,
      trim: true,
    },
    endDate: {
      type: Date,
      required: true,
      trim: true,
    },
    offerDescription: {
      type: String,
      required: true,
    },
    validity: {
      type: String,
    },
    moreInfo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Auction = mongoose.model("Auction", auctionSchema);
