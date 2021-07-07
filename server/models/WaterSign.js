const { Schema, model } = require('mongoose');
const currentDate = new Date()

const waterSchema = new Schema(
  {
    waterMessage: {
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

const WaterSign = model('WaterSign', waterSchema);

module.exports = WaterSign;