// Imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('./models/room.model');
require('./models/guest.model');

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
}).then(() => {
  console.log('MongoDB database connection established successfully')
}).catch(err => {
  console.error(err);
})

// Routes
app.use('/rooms', require('./routes/room'));
app.use('/guests', require('./routes/guest'));
app.use('/', async (req, res) => {
  res.status(200).send('Welcome to the hotel management system');
});


// Listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
