const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/create', async (req, res) => {
    const newOrder = new Order({
        username: req.body.username,
        brand: req.body.brand,
        model: req.body.model,
        daysRented: req.body.daysRented
    });

    try{
        const saveNewOrder = await newOrder.save();
        res.json(saveNewOrder);
    } catch (error){
        res.json({message: error});
    }

});

router.get('/history/:user', async (req, res) => {
    try {
        const record = await Order.find({username: req.params.user}).exec();
        res.json(record);
    } catch (error){
        res.json({message: error});
    }
});

module.exports = router;