const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");
// const auth = require("../middleware/auth");

router.post("/", async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.status(201).send(hotel);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  const { city, minPrice, maxPrice } = req.query;
  console.log("hello",req.query)

  try {
    const hotels = await Hotel.find({
      city: city,
      price: { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) },
    });

    res.json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findById(id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.json(hotel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/random/:city', async (req, res) => {
  const { city } = req.params;

  try {
    const hotels = await Hotel.aggregate([
      { $match: { city: city } },
      { $sample: { size: 4 } }
    ]);

    res.json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
