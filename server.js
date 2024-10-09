const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv'); // Load environment variables from .env file
const connectDB = require('./config/db'); // Import MongoDB connection function

// Load environment variables from .env file
dotenv.config();

// router import
const userRoutes = require('./routes/userRoutes');
// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes 
app.use('/api/v1/user', userRoutes);

// Get PORT from environment variables or default to 8080
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
