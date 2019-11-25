const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    product_name: { type: String },
    product_description: { type: String },
    category: { type: String },
    img_url: { type: String },
    price: {type: Number }
})

const Product = mongoose.model('Product', productsSchema);

module.exports = Product