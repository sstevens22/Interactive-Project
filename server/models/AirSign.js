const { Schema, model } = require('mongoose');
const currentDate = new Date()

const airSchema = new Schema(
  {
    airMessage: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => currentDate.getDate(createdAtVal)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const AirSign = model('AirSign', airSchema);

module.exports = AirSign;