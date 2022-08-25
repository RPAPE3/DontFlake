const mongoose = require('mongoose');

const { Schema } = mongoose;

const groupSchema = new Schema({
    title: {
        type: String,
        default: 'Untitled Group',
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true
    },
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile',
            required: true,
            min: 2
        }
    ],
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;