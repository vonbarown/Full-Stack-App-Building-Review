const Item = require('./Item')

class Bread extends Item {
    constructor(id, name, units, price, bakery, bread_type) {
        super(id, name, units, 'bread', price);
        this.bakery = bakery;
        this.bread_type = bread_type;
    }
}

module.exports = Bread;