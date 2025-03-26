const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const movieRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/authRoutes'); // Add Authentication Route
const bookingRoutes = require('./routes/bookingRoutes'); // Add Booking Route

// Database connection
require('./database/db');

// Routes
app.use('/api/movies', movieRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes); // Authentication Routes (Login/Register)
app.use('/api/bookings', bookingRoutes); // Booking Routes (Protected)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
