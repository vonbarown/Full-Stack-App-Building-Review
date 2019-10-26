const express = require('express');
const myInventory = require('../models/inventory')

const router = express.Router();

router.get('/', (req, res) => {
    let allVeggies = myInventory.getAllItemByType('vegetable')
    res.json(allVeggies)
})

router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let = veggie = myInventory.getItemByID(id, 'vegetable')
    res.json(veggie)
})

module.exports = router;