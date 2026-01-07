const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: { type: String, unique: true },
    passwordHash: String
});

module.exports = mongoose.model('User', User);

