// Imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Config
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// DB Config
mongoose.connect('mongodb://127.0.0.1:27017/hoteldb', { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});

// Listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));