const express = require('express');
const router = express.Router();
const Orders = require('../models/orders');
const mongoose = require('mongoose');

// add new order
router.post('/', (req, res, next) => {
    const order = new Orders({
        Order_ID: new mongoose.Types.ObjectId,
        User_id: req.body.User_id,
        Packages_ID: req.body.Packages_ID,
        Service_ID: req.body.Service_ID,
        Creation_time: req.body.Creation_time,
        Delivered_time: null,
        Total_Price: req.body.Total_Price,
        Payment_Method: req.body.Payment_Method,        
        Order_details: req.body.Order_details,
        Order_Status: req.body.Order_Status,
        isActive: true
    })

    order.save() // saving data to database
        .then(result => {
            console.log(result);
            res.status(200).json({
                newOrder: result
            })
        })

        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err

            })
        })
})

// Read Orders
router.get('/', (req, res, next) => {
    Orders.find()
        .exec()
        .then(result => {
            res.status(200).json({
                All_Orders: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});

module.exports = router