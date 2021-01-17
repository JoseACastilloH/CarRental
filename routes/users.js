const express = require('express');
const router = express.Router();
const User = require('../models/Users');

//create user
router.post('/create', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        lastname: req.body.lastname,
        gender: req.body.gender,
        age: req.body.age
    });

    try{
        const saveNewUser = await newUser.save();
        res.json(saveNewUser);
    } catch (error){
        res.json({message: error});
    }

});

//show profile information
router.get('/profile/:user', async (req, res) => {
    try {
        const profile = await User.findOne({username: req.params.user}).exec();
        res.json(profile);
    } catch (error){
        res.json({message: error});
    }
});

module.exports = router;