const mongoose = require('mongoose');

const CarListsSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: String,
    price: Number
});

module.exports = mongoose.model('cars', CarListsSchema);