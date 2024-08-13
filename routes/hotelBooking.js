const express = require("express");
const router = express.Router();
const HotelBooking = require("../models/HotelBooking");
// const auth = require("../middleware/auth");

router.post("/", async (req, res) => {
  try {
    const hotelBooking = new HotelBooking(req.body);
    await hotelBooking.save();
    res.status(201).json(hotelBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  } 
});

module.exports = router;