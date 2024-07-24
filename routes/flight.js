const express = require("express");
const router = express.Router();
const Flight = require("../models/Flight");

router.post("/", async (req, res) => {
  const { name, price, description, imageURL, from, to, tripType } = req.body;

  try {
    const newFlight = new Flight({
      name,
      price,
      description,
      imageURL,
      from,
      to,
      tripType,
    });

    const savedFlight = await newFlight.save();
    res.status(201).json(savedFlight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/api/flights", async (req, res) => {
  const { from, to } = req.query;

  try {
    const flights = await Flight.find({ from: from, to: to });

    res.json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
