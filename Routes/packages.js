const express = require('express');
const router = express.Router();
const packages = require('../models/packages');
const mongoose = require('mongoose');

// add new package
router.post('/', (req, res, next) => {
    const package = new packages({
        _id: new mongoose.Types.ObjectId,
        Package_Name:req.body.Package_Name,    
        Package_desc:req.body.Package_desc,
        Package_price:req.body.Package_price,
        Package_deadline:req.body.Package_deadline
    })

    package.save() // saving data to database
        .then(result => {
            console.log(result);
            res.status(200).json({
                newPackage: result
            })
        })

        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err

            })
        })
})

// Read Packages
router.get('/', (req, res, next) => {
    packages.find()
        .exec()
        .then(result => {
            res.status(200).json({
                All_packages: result
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