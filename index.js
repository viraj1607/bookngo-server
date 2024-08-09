const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
require('dotenv').config();


app.use(cors({
    origin: "http://localhost:3000", // Replace with your React app's URL
  }));

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/hotels',require('./routes/hotel'))
app.use('/api/flights',require('./routes/flight'))

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
