const mongoose = require('mongoose');
const Room = mongoose.model('Rooms');

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.getRoom = async (req, res) => {
  try {
    console.log(req.params);
    const room = await Room.getRoombyId(req.params.id);
    if (!room) {
      throw new Error('Room not found');
    }
    res.status(200).json(room);
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.addRoom = async (req, res) => {
  try {
    const newRoom = new Room(req.body);
    await newRoom.save();

    res.status(201).json(newRoom);
  } catch (e) {
    res.status(400).json(e);
  }
};
