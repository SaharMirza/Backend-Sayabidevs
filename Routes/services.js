const express = require('express');
const router = express.Router();
const Services = require('../models/services');
const mongoose = require('mongoose');

// add new item 
router.post('/', (req, res, next) => {
    const service = new Services({
        _id: new mongoose.Types.ObjectId,
        Item_Name:req.body.Item_Name,
        Cat_id:req.body.Cat_id,
        
    })

    service.save() // saving data to database
        .then(result => {
            console.log(result);
            res.status(200).json({
                newfooditem: result
            })
        })

        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err

            })
        })
})

// Read services
router.get('/', (req, res, next) => {
    Services.find()
        .exec()
        .then(result => {
            res.status(200).json({
                All_Services: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});

module.exports = router;