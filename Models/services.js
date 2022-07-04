const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const ServiceSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Item_Name:{
        type: String,
        required: true,
        unique: true
    },
    Cat_id:{
        type: String,
        required: true
    },  

    
})

module.exports = mongoose.model('Service',ServiceSchema);