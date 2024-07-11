const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");
// const auth = require("../middleware/auth");

router.post("/",async (req, res) => {
    try {
      const hotel = new Hotel(req.body);
      await hotel.save();
      res.status(201).send(hotel);
    } catch (error) {
      res.status(400).send(error);
    }
  })



module.exports = router;
