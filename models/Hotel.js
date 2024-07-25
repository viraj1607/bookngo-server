const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  address: String,
  price: Number,
  reviews: Number,
  nearby: String,
  city: String,
  province: String,
  amenities: Array,
  facilities: Array,
  category: String,
  latitude: String,
  longitude: String,
  image360: String,
  description: String,
  imageURLs: Array,
});

module.exports = mongoose.model("Hotel", hotelSchema);
