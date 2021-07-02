const mongoose = require('mongoose');
const { Schema, model} = mongoose;
const zodiacDate = require('../utils/dateRange');

const horoscopeSchema = new Schema(
    {
        zodiacSign:{
            type:String,
            required: true
        },
        zodiacDate:{
            type:String,
            required: true,
            get: (zodiacDateVal) => zodiacDate(zodiacDateVal)
        }
    },
    {
        toJSON: {
          getters: true
        }
    }
)

const Horoscope = mongoose.model('Horoscope', horoscopeSchema);

module.exports = Horoscope;
//sign
//date
//description
//picture(icon of zodiac signs)