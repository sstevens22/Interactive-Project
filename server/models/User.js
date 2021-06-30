const { Schema, model} = require('mongoose');
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
        createdAt:{
            type: Date,
            default: Date.now,
            get: (createdAtVal) => currentDate.getDate(createdAtVal)
        },
        zodiacSign:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Horoscope'
            }
        ]
    }
)



const User = model('User', userSchema);

module.exports = User;
//username
//email
//password
//created at
//token
//zodiac sign []

