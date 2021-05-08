const mongoose = require('mongoose');

const housekeeperSchema = mongoose.Schema({
  housekeeperName: {
    type: String,
    required: true,
  },
  bathroom: {
    type: Boolean,
    required: true,
  },
  towels: {
    type: Boolean,
    required: true,
  },
  electronics: {
    type: Boolean,
    required: true,
  },
  dusting: {
    type: Boolean,
    required: true,
  },
  carpet: {
    type: Boolean,
    required: true,
  },
  bedSheets: {
    type: Boolean,
    required: true,
  },
});

housekeeperSchema.statics.getGuestbyId = async function (housekeeperid) {
  try {
    const housekeeper = await this.model('Housekeepers').findOne({
      _id: housekeeperid,
    });

    return housekeeper;
  } catch (err) {
    console.error(err);
  }
};

const housekeeperModel = mongoose.model('Housekeepers', housekeeperSchema);

module.exports = housekeeperModel;
