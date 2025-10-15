require('dotenv').config(); // Load environment variables from the .env file

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());

// Routes
app.use('/', index);
app.use('/image', image);

// Connecting to the database using the MONGO_URI from the environment variable
let mongodb_url = process.env.MONGO_URI; // MongoDB URI from .env file
let dbName = 'darkroom';

// Only connect to MongoDB when not running tests
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(`${mongodb_url}${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.log('MongoDB connection error:', err);
    } else {
      console.log('Database connected successfully');
    }
  });
}

// Export the app for testing, and only start the server if this file is run directly
const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
}

module.exports = app;
