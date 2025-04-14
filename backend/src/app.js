const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const newsRoutes = require('./routes/newsRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use('/api/news', newsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});