const express = require('express');
const router = express.Router();
const servicescat = require('../models/servicescategory');
const mongoose = require('mongoose');

// add new service
router.post('/', (req, res, next) => {
    const servicecat = new servicescat({
        _id: new mongoose.Types.ObjectId,
        Cat_Name: req.body.Cat_Name
    })

    servicecat.save() // saving data to database
        .then(result => {
            console.log(result);
            res.status(200).json({
                newServiceCat: result
            })
        })

        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err

            })
        })
})

// Read Service Category
router.get('/', (req, res, next) => {
    servicescat.find()
        .exec()
        .then(result => {
            res.status(200).json({
                All_ServicesCat: result
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