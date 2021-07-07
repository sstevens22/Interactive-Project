const { AuthenticationError } = require('apollo-server-express');
const { User, WaterSign, EarthSign, AirSign, FireSign } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query:{
        me: async (parent, args, context) =>{
            if(context.user) {
                const userData = await User.findOne({_id: context.user._id})
                .select('-__v-password')
                .populate('waterSigns')
                .populate('earthSigns')
                .populate('airSigns')
                .populate('fireSigns');

                return userData;
            }
            throw new AuthenticationError('Not logged in')
        },
        users: async () => {
            return User.find()
            .select('-__v-password')
            .populate('waterSigns')
            .populate('earthSigns')
            .populate('airSigns')
            .populate('fireSigns');
        },
        user: async (parent, {username}) => {
            return User.findOne({username})
            .select('-__v-password')
            .populate('waterSigns')
            .populate('earthSigns')
            .populate('airSigns')
            .populate('fireSigns');
        },
        waterSigns: async (parent, { username }) => {
            const params = username ? { username } : {};
            return WaterSign.find(params).sort({ createdAt: -1 });
          },
        earthSigns: async (parent, { username }) => {
            const params = username ? { username } : {};
            return EarthSign.find(params).sort({ createdAt: -1 });
        },
        airSigns: async (parent, { username }) => {
            const params = username ? { username } : {};
            return AirSign.find(params).sort({ createdAt: -1 });
        },
        fireSigns: async (parent, { username }) => {
            const params = username ? { username } : {};
            return FireSign.find(params).sort({ createdAt: -1 });
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            const token = signToken(user);
            return {token, user};
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
           const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            console.log(token, user);
            return {user, token};
          },
          addWaterSign: async (parent, args, context) => {
            if(context.user) {
              const waterSign = await WaterSign.create({ ...args, username: context.user.username });
    
              await User.findByIdAndUpdate(
                {_id: context.user._id },
                { $push: { waterSigns: waterSign._id } },
                { new: true }
              );
              return waterSign;
            }
            throw new AuthenticationError('You need to be logged in!')
          },
          addEarthSign: async (parent, args, context) => {
            if(context.user) {
              const earthSign = await EarthSign.create({ ...args, username: context.user.username });
    
              await User.findByIdAndUpdate(
                {_id: context.user._id },
                { $push: { earthSigns: earthSign._id } },
                { new: true }
              );
              return earthSign;
            }
            throw new AuthenticationError('You need to be logged in!')
          },
          addAirSign: async (parent, args, context) => {
            if(context.user) {
              const airSign = await AirSign.create({ ...args, username: context.user.username });
    
              await User.findByIdAndUpdate(
                {_id: context.user._id },
                { $push: { airSigns: airSign._id } },
                { new: true }
              );
              return airSign;
            }
            throw new AuthenticationError('You need to be logged in!')
          },
          addEarthSign: async (parent, args, context) => {
            if(context.user) {
              const fireSign = await FireSign.create({ ...args, username: context.user.username });
    
              await User.findByIdAndUpdate(
                {_id: context.user._id },
                { $push: { fireSigns: fireSign._id } },
                { new: true }
              );
              return fireSign;
            }
            throw new AuthenticationError('You need to be logged in!')
          },
    }
}
module.exports = resolvers;