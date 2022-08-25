const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Group = require('./Group');
const Event = require('./Event');


const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 30,
    trim: true
  },
  profile_picture: {
    type: Image
  },
  area: {
    type: String,
    minlength: 5,
    trim: true
  },
  birthday: {
    type: Date
  },
  flake_rating: {
    type: Number,
    default: 100,
    min: 0,
    max: 100
  },
  public_requests: [
    {
      profile_name: String,
      trim: true,
    }
  ],
  user_request: [
    {
      profile_name:  { 
        type: String,
        trim: true
      }
    }
  ],
  events_attended: [
    {
    event_name: {
      type: String,
      trim: true
    },
    date: Date
    }
  ],
  events: [Event.schema],
  connections: [
    {
      self_username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 30,
        trim: true
      },
      other_username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 30,
        trim: true
      },
      close_friend: {
        type: Boolean,
        default: false,
      }
    }
  ],
  groups: [Group.schema]
});

profileSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

profileSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Profile = mongoose.model('User', profileSchema);

module.exports = Profile;