const mongoose = require('mongoose');

const RecordsSchema = mongoose.Schema({
    username: String,
    brand: String,
    model: String,
    daysRented: Number
});

module.exports = mongoose.model('orders', RecordsSchema);