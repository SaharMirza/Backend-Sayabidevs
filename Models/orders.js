const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    Order_ID: mongoose.Schema.Types.ObjectId,
    User_id: { type: String, required: true }, //whose order it is
    Packages_ID: { type: String, required: true }, //which package is choosen
    Service_ID: { type: String, required: true },
    Creation_time: { type: String, required: true },
    Delivered_time: { type: String },
    Total_Price: { type: Number, required: true }, 
    Payment_Method: { type: String, enum: ["Jazz Cash", "Card"], required: true },
    Order_details: { type: String },
    Order_Status: { type: String, enum: ["Completed", "In Progress", "Cancelled"], required: true },
    isActive: { type: Boolean, required: true }, //for soft delete 
});


const Order = mongoose.model('order', orderSchema)
module.exports = Order