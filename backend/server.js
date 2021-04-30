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
const connection_url =
  'mongodb+srv://dbUser:C8-eGhpqWXUwzWr@cluster0.tln7g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', function () {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.get('/hotel', (req, res) => {
  console.log('WOOOO');
});

// Listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
