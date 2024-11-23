const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9]{10}$/, // Validates a 10-digit phone number
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'], // Restricts to these values
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('User', UserSchema);
