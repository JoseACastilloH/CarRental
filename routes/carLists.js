const express = require('express');
const router = express.Router();
const CarList = require('../models/CarLists');

router.get('/', async (req, res) => {
    try {
        const carList = await CarList.find();
        res.json(carList);
    } catch (error){
        res.json({message: error});
    }
});

module.exports = router;