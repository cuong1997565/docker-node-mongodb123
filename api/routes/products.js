const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const Product = require('./../models/products');

router.get('/', (req, res, next) => {
    res.status(200).json({
            message: 'Handling Get request to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result => {
        console.log(result);
    }).catch(err=> console.log(err));
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // };
    res.status(200).json({
            message: 'Handling Post request to /products',
            createProduct: product
    });
});


router.post('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:productId',(req, res, next) => {
    res.status(200).json({
        message: 'Delete product!'
    });
})


module.exports = router;