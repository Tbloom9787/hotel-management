const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  guestFirst: {
    type: String,
    required: false,
  },
  guestLast: {
    type: String,
    required: false,
  },
  dateReserved: {
    type: String,
    required: false,
  },
  checkIn: {
    type: String,
    required: false,
  },
  checkOut: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  rate: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
});

roomSchema.statics.getRoombyId = async function (roomid) {
  try {
    const room = await this.model('Rooms').findOne({
      _id: roomid,
    });

    return room;
  } catch {
    return null;
  }
};

const roomModel = mongoose.model('Rooms', roomSchema);

module.exports = roomModel;
