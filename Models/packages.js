const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const PackagesSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Package_Name:{
        type: String,
        required: true,
        unique: true
    },    
    Package_desc:{
        type: String,
        required: true,
    },
    Package_price:{
        type: Number,
        required:true
    },
    Package_deadline:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Packages',PackagesSchema);