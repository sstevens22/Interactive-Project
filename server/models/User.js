const mongoose = require('mongoose');
const { Schema, model} = mongoose;
const bcrypt = require('bcrypt');

const currentDate = new Date()

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password:{
            type: String,
            required: true,
            minlength: 5
        },
        waterSigns: [
          {
            type: Schema.Types.ObjectId,
            ref: 'WaterSign'
          }
        ],
        fireSigns: [
          {
            type: Schema.Types.ObjectId,
            ref: 'FireSign'
          }
        ],
        airSigns: [
          {
            type: Schema.Types.ObjectId,
            ref: 'airSign'
          }
        ],
        earthSigns: [
          {
            type: Schema.Types.ObjectId,
            ref: 'EarthSign'
          }
        ],
        createdAt:{
            type: Date,
            default: Date.now,
            get: (createdAtVal) => currentDate.getDate(createdAtVal)
        }
    },
    {
        toJSON: {
          getters: true
        }
    }
);
// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });


// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

const User = mongoose.model('User', userSchema);

module.exports = User;
//username
//email
//password
//created at
//token
//zodiac sign []

// zodiacSign:[
//     {
//         type: Schema.Types.ObjectId,
//         ref: 'Horoscope'
//     }
// ]

// waterSigns: [
//   {
//     type: Schema.Types.ObjectId,
//     ref: 'WaterSign'
//   }
// ],
// fireSigns: [
//   {
//     type: Schema.Types.ObjectId,
//     ref: 'FireSign'
//   }
// ],
// airSigns: [
//   {
//     type: Schema.Types.ObjectId,
//     ref: 'airSign'
//   }
// ],
// earthSigns: [
//   {
//     type: Schema.Types.ObjectId,
//     ref: 'EarthSign'
//   }
// ],