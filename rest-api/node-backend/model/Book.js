// create schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = new Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
},
{
    collation: 'books'
}
)
// export module
module.exports = mongoose.model('Book', Book)