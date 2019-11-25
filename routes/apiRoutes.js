// Requiring express, setting a constant variable 'router' to the express.Router() method
const express = require('express');
const router = express.Router();
const ProductModel = require('../models/productsModel');

// HTTP requests/API endpoints

router.get('/products', async (req, res) => {
    const products = await ProductModel.find();
    res.status(200).send(products);
})

router.post('/add', async (req, res) => {
    let products = new ProductModel({
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        category: req.body.category,
        img_url: req.body.img_url,
        price: req.body.price
    });
    products = await products.save();
    res.send(products);
})

module.exports = router;