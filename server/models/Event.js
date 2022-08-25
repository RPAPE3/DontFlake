const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema ({
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
        trim: true
    },
    commitments: [
        {
            type: String,
            trim: true
        },
    ],
    flakes: [
        {
            type: String,
            trim: true,
        }
    ],
    theme: {
        type: String,
        trim: true
    },
    active: {
        type: Boolean
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    private: {
        type: Boolean
    },
    image: {
        type: Image
    },
    recaps: [
        {
            image: {
                type: Image,
            },
            event_description: {
                type: String,
                trim: true,
                required: true
            },
        }
    ]

});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;