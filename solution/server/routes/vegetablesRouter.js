const express = require('express');
const myInventory = require('../models/inventory')
const Vegetable = require('../models/Vegetable')

const router = express.Router();

router.get('/', (req, res) => {
    let allVeggies = myInventory.getAllItemByType('vegetable')
    res.json(allVeggies)
})

router.post('/', (req, res) => {
    let itemDetails = req.body

    let newVeggie = myInventory.addItem(itemDetails, 'vegetable')

    res.json(newVeggie)
})

router.patch('/:id', (req, res) => {
    let updateItem = req.body;

    let id = parseInt(req.params.id)
    res.json(myInventory.updateItem(id, updateItem, 'vegetable'))
})

router.delete('/:id', (req, res) => {
    let itemDetails = req.body;
    let id = parseInt(req.params.id)
    console.log('iddd', id);

    let removed = myInventory.removeItem(id, 'vegetable')
    res.json(removed)
})

router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let = veggie = myInventory.getItemByID(id, 'vegetable')
    res.json(veggie)
})

module.exports = router;