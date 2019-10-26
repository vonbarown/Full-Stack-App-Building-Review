const vegetables = [{
    "id": 1,
    "name": "Carrot",
    "origin": "Detroit, Michigan",
    "price": 2.25,
    "unit": "LB",
    "units": 20,
    "arrived_timestamp": "2019-10-26T17:43:50.159Z",
    "type": "vegetable"
}];

class Inventory {
    constructor() {
        this.vegetables = [];
        this.bread = [];
    }

    addItem(item) {
        if (item.type === 'vegetable') {
            this.vegetables.push(item)
        } else {
            this.bread.push(item)
        }
    }

    removeItem(itemId, type) {
        console.log(type);
        if (this[type]) {
            return this[type] = this[type].filter(el => el.id !== itemId)
        }
        // if (type === 'vegetable') {
        //     for (let i = 0; i < this.vegetables.length; i++) {
        //         let currItem = this.vegetables[i];
        //         if (currItem.id === itemId) {
        //             this.vegetables.splice(i, 1);
        //             return currItem
        //         }
        //     }
        // } else if (type === 'bread') {
        //     for (let i = 0; i < this.bread.length; i++) {
        //         let currItem = this.bread[i];
        //         if (currItem.id === itemId) {
        //             this.bread.splice(i, 1);
        //             return currItem
        //         }
        //     }
        // }
    }
    getItemByID(itemId, type) {
        let arr;

        if (type === 'vegetable') {
            arr = this.vegetables
        } else if (type === 'bread') {
            arr = this.bread
        }

        for (let i = 0; i < arr.length; i++) {
            let currItem = arr[i];
            if (currItem.id === itemId) {
                return currItem
            }
        }
        return null
    }

    getAllItemByType(type) {
        if (type === 'vegetable') {
            return this.vegetables
        } else if (type === 'bread') {
            return this.bread
        }
    }


    updateItem(item) {}

    getAllItem() {}

}

let myInventory = new Inventory();

let item1 = {
    id: 1,
    type: 'bread',
    name: 'Bagel'
}

let item2 = {
    id: 2,
    type: 'vegetable',
    name: 'Spinach'
}

let item3 = {
    id: 3,
    type: 'vegetable',
    name: 'Carrot'
}


myInventory.addItem(item1)
myInventory.addItem(item2)
myInventory.addItem(item3)

//remove spinach
let removed = myInventory.getAllItemByType('vegetable')
console.log(removed);


// const addVegetables = (vegetable) => {
//     vegetables.push(vegetable)
// }

module.exports = myInventory;