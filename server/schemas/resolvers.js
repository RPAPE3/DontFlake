const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    user: async (parent, { email }) => {
      return (await User.findOne({ email }));
    },
    users: async (parent) => {
      return User.find({});
    },
    events: async (parent, args, context) => {
      if (args.username) {
      return User.find({ username: args.username }).populate('events').events; //finder other users events by username. 
    }
    else if (context.user) {
      return User.findById(context.user._id).populate('events').events; //find own events by id. 
    }
  },
  },
  Mutation: {
      addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);

          return { token, user };
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
    
          return { token, user };
        }
  }
};

module.exports = resolvers;