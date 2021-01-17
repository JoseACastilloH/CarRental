const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Car Rental Home');
});

module.exports = router;