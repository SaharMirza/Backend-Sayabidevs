const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const ServicesSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Service_Name:{
        type: String,
        required: true,
        unique: true
    },    
    Cat_ID:{
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Services',ServicesSchema);