const { Schema, model } = require('mongoose');
const currentDate = new Date()

const fireSchema = new Schema(
  {
    fireMessage: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => currentDate.toLocaleDateString(createdAtVal)
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

const FireSign = model('FireSign', fireSchema);

module.exports = FireSign;