const mongoose = require('mongoose');

const ProfilesSchema = mongoose.Schema({
    username: String,
    name: String,
    lastname: String,
    gender: String,
    age: Number
});

module.exports = mongoose.model('users', ProfilesSchema);