const express = require('express');
const myInventory = require('../models/inventory')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This should show all veggies in inventory')
})

module.exports = router;