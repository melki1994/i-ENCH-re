const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: Schema.Types.ObjectId,
    },
    winBid: [
      {
        auctionId: {
          type: Schema.Types.ObjectId,
          ref: "Auction",
          required: true,
        },
        totalAmount: { type: Number, required: true },
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Order = mongoose.model("AuctionInfo", orderSchema);
