const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var reviewSchema = new Schema({
    value:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    content:  {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
     
const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    reviews:[reviewSchema]
}, {
    timestamps: true
});

var Products = mongoose.model('Product', productSchema);

module.exports = Products;
