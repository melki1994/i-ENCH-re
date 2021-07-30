const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },
    firstName: {
      type: String,
      // required: true,
      trim: true,
    },
    lastName: {
      type: String,
      // required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      // required: true,
      // trim: true,
    },
    password: {
      type: String,
      // required: true,
      trim: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "partner"],
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("User", userSchema);
