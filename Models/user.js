const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    username:String,
    phoneNumber:String,
    address:String,
    role:String,
    status:String,
    
})

const User = mongoose.model('user',UserSchema)
module.exports = User