# Full Stack App Building Review

This review outlines the app structure for a simple inventory management app. It will have a simple frontend and backend.

* Frontend (client) - HTML/CSS & JavaScript
* Backend (server) - Express.js with Node.js

## Objectives
* Learn how to architect and handle different routes/endpoint in an API
* Learn how to handle HTTP requests with different HTTP methods
* Learn how to send HTTP requests from a simple frontend to an API
* Learn about dates in JavaScript
* Exercise object oriented programming.

## Data Storage & Models

* Inventory Class
  * Properties
    * `vegetables`
    * `bread`
  * Methods
    * `.addItem(prop1, prop2, prop2, ...)`
    * `.getItems(type)`
    * `.updateItem()`
    * `.removeItem()`
    * `.generateId()`

* Item class
  * Properties
    * `id`
    * `name`
    * `price`
    * `unit`
    * `units`
    * `arrived_timestamp`
    * `type`

**Note**: Object oriented vs having two arrays as global variables.

## Backend API

### Endpoints

#### `/inventory`

* `/inventory/vegetable`
  | HTTP Method | Behavior                       |
  | ----------- | ------------------------------ |
  | `GET`       | Get all vegetable in inventory |
  | `POST`      | Add vegetable to to inventory  |

* `/inventory/vegetable/<id>`

  | HTTP Method | Behavior            |
  | ----------- | ------------------- |
  | `GET`       | Get vegetable by id |
  | `PATH`      | Update vegetable    |
  | `DELETE`    | Delete vegetable    |

**Vegetable Object**:
A JavaScript representation of a vegetable in our system looks like:
```json
{
  "id": 1,
  "name": "Carrot",
  "origin": "Detroit, Michigan",
  "price": 2.25,
  "unit": "LB",
  "units": 20,
  "arrived_timestamp": "2019-10-26T17:43:50.159Z",
  "type": "vegetable"
}
```

* `/inventory/bread`
  | HTTP Method | Behavior                   |
  | ----------- | -------------------------- |
  | `GET`       | Get all bread in inventory |
  | `POST`      | Add bread to inventory     |

* `/inventory/bread/<id>`

  | HTTP Method | Behavior        |
  | ----------- | --------------- |
  | `GET`       | Get bread by id |
  | `PATH`      | Update bread    |
  | `DELETE`    | Delete bread    |

**Bread Object**:
A JavaScript representation of a bread in our system looks like:

```json
{
  "id": 34,
  "name": "Roll",
  "price": 1.00,
  "units": 57,
  "bakery": "Tom Cat",
  "arrived_timestamp": "2019-10-26T10:43:50.159Z",
  "type": "bread",
  "bread_type": "flatbread"
}
```
## Frontend

* Should have two forms one for adding a vegetable and one to add a bread to the inventory
* Should display the list of vegetables underneath the vegetable form. Same for the bread
* Every item should have a `Delete` button next to it to remove the item
* Update item
  * v1. Form to add an item should also include a text field to specify an id in case an item is to be updated. An `Edit` button should also exists in the form for updating an item. 
  * v2. Every item should have an `Edit` button next to it to edit the item. A form should appear underneath the item to be updated. Input fields should be pre-populated with the old values.

## Bonus
* Instead of two separate forms, have two radio buttons one for vegetables and one for bakery. Based on the checkbox selected display the appropriate input fields and send the appropriate network request upon submit.
