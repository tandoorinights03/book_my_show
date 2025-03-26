const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    watchlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }],
    bookings: [{
        movieId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie',
            required: true
        },
        showtime: {
            type: Date,
            required: true
        },
        seats: {
            type: Number,
            required: true,
            min: 1
        },
        totalPrice: {
            type: Number,
            required: true
        },
        bookingDate: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ['confirmed', 'cancelled'],
            default: 'confirmed'
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
