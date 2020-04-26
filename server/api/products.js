const express = require('express');
const router = express.Router();
const Product = require('./model/productModel');
const mongoose = require('mongoose');

router.get('/:productId', (req, res, next) => {
    Product.findById(req.params.productId)
    .exec()
    .then(result => {
        res.status(200).json({
            data: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    });
});
router.get('/', (req, res, next) => {
    Product.find()
    .select('_id name price')
    .exec()
    .then(result => {
        res.status(200).json({
            data: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    });
})

router.post('/', (req, res, next) => {
    const {name, price} = req.body;
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name,
        price
    });
    product.save().then(result => {
        res.status(201).json({
            message: "entry created", 
            data: product
         })
    }).catch(err => {
       res.status(500).json({error : err});
    });
    
});

router.delete('/:productId', (req, res, next) => {
    Product.deleteOne({_id: req.params.productId})
    .exec()
    .then(status => {
        res.status(200).json({message: "deleted succesfully"});
    })
    .catch(err => {
        res.status(500).json({error: err});
    });
});

router.patch('/:productId', (req, res, next) => {
    Product
    .update({_id: req.params.productId}, {price: req.body.price})
    .exec()
    .then( updated => {
        res.status(200).json({
            message: "updated Successfully",
            updated: updated
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
});

module.exports = router;