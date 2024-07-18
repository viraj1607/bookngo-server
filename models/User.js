const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  province: {
    type: String,
    default: "",
  },
  pincode: {
    type: String,
    default: "",
  },
  mobile: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", UserSchema);
