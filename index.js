const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
require('dotenv').config();


const corsOptions = {
    origin: 'https://bookandgo.vercel.app', // Replace with your Vercel domain
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  };
  
  app.use(express.json({ extended: false }));
  app.use(cors(corsOptions));

// Connect Database
connectDB();

// Init Middleware

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/hotels',require('./routes/hotel'))
app.use('/api/flights',require('./routes/flight'))
app.use('/api/booking',require('./routes/hotelBooking'))

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
