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

module.exports = router;
