const mongoose = require('mongoose');
const Housekeeper = mongoose.model('Housekeepers');

exports.getHousekeeper = async (req, res) => {
  const { id } = req.params;
  try {
    const housekeeper = await Housekeeper.findById(id);
    res.status(200).json(housekeeper);
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.getAllHousekeepers = async (req, res) => {
  try {
    const housekeepers = await Housekeeper.find({});
    res.status(200).json(housekeepers);
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.addHousekeeper = async (req, res) => {
  const housekeeper = req.body;
  try {
    const newHousekeeper = new Housekeeper({
      firstName: housekeeper.firstName,
      lastName: housekeeper.lastName,
      phone: housekeeper.phone,
      address: housekeeper.address,
      email: housekeeper.email,
      stateID: housekeeper.stateID,
      licensePlate: housekeeper.licensePlate,
    });
    await newHousekeeper.save();

    res.status(201).json(newHousekeeper);
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.updateHousekeeper = async (req, res) => {
  const { id } = req.params;
  try {
    const housekeeper = await Housekeeper.findByIdAndUpdate(id);
    res.status(200).json(housekeeper);
  } catch (e) {
    res.status(400).json(e);
  }
};
