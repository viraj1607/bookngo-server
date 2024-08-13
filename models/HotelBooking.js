const mongoose = require('mongoose');

const hotelBookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  billingName: { type: String, required: true },
  billingEmail: { type: String, required: true },
  billingPhoneNumber: { type: String, required: true },
  location: { type: String, required: true },
  hotelName: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  roomsAndGuests: { type: Object, required: true }, 
});

module.exports = mongoose.model("HotelBooking", hotelBookingSchema);
