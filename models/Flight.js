const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: false },
  imageURL: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  tripType: { type: String, required: true },
});

module.exports = mongoose.model("Flight", flightSchema);
