const mongoose = require('mongoose');
const Guest = mongoose.model('Guests');

exports.getGuest = async (req, res) => {
  const { id } = req.params;
  try {
    const guest = await Guest.findById(id);
    res.status(200).json(guest);
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.getAllGuests = async (req, res) => {
    try {
        const guests = await Guest.find({});
        res.status(200).json(guests);
    } catch (e) {
        res.status(400).json(e);
    }
};

exports.addGuest = async (req, res) => {
  const guest = req.body;
  try {
    const newGuest = new Guest({
        firstName: guest.firstName,
        lastName: guest.lastName,
        phone: guest.phone,
        address: guest.address,
        email: guest.email,
        stateID: guest.stateID,
        licensePlate: guest.licensePlate,
    });
    await newGuest.save();

    res.status(201).json(newGuest);
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.updateGuest = async (req, res) => {
  const { id } = req.params;
  try {
    const guest = await Guest.findByIdAndUpdate(id);
    res.status(200).json(guest);
  } catch (e) {
    res.status(400).json(e);
  }
};
