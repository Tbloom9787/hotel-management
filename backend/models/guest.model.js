const mongoose = require('mongoose');

const guestSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    stateID: {
      type: String,
      required: true,
    },
    licensePlate: {
      type: String,
      required: true,
    },
    room: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rooms' }],
  },
  {
    timestamps: true,
  }
);

guestSchema.statics.getGuestbyId = async function (id) {
  try {
    const guest = await this.model('Guests').findOne({
      _id: id,
    });

    return guest;
  } catch (err) {
    console.error(err);
  }
};

const guestModel = mongoose.model('Guests', guestSchema);

module.exports = guestModel;
