const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    sellerId: {
      type: Schema.Types.ObjectId,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    fullAdress: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      required: true,
    },
    offerDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("User", userSchema);
