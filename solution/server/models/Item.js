class Item {
    constructor(id, name, units, type, price) {
        this.id = id;
        this.name = name;
        this.units = units;
        this.type = type;
        this.price = price;
        this.arrived_at = new Date().toISOString()
    }
}

let myItem = new Item(100, 'bottle', '365', 'bread', 0.75)

// console.log(myItem);

module.exports = Item