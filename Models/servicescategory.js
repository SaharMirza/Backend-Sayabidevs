const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Cat_Name: {
        type: String,
        required: true,
        unique: true
    },
    
})

module.exports = mongoose.model('Category', CategorySchema);