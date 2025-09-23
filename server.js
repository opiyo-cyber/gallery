require('dotenv').config(); // Load environment variables from the .env file

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Connecting to the database using the MONGO_URI from the environment variable
let mongodb_url = process.env.MONGO_URI;  // MongoDB URI from .env file
let dbName = 'darkroom';

// Connect to MongoDB Atlas
mongoose.connect(`${mongodb_url}${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log('MongoDB connection error:', err);
    } else {
        console.log('Database connected successfully');
    }
});

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

// Set up the port for the server to listen on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
