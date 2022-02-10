const mongoose = require('mongoose');

const dogSchema = mongoose.Schema(
  {
    breed: {
      type: String,
      required: [true, 'please enter breed'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Dog', dogSchema);
