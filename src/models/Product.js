const mongoose = require('mongoose');
const Schema = mongoose.Schema;

Product = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
    images: {type: Array, default: []},
    description: { type: String, default: '' },
    categories: { type: Array, default: [] },
    seller: { type: String, default: '' },
    reviews: { type: Array, default: [] },
    rating: { type: Number, default: 0 },
    status: { type: String, default: 'active' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', Product, 'products');