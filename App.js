const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const createError = require('http-errors')
const cors = require("cors");
const UserRoute = require('./Routes/user')

// connect db to node.js using link from database access and writing password 
mongoose.connect('mongodb+srv://Sayabidevs:sayabidevs123@sayabidevs.pivuxwc.mongodb.net/?retryWrites=true&w=majority')

// to check if connection established or not 
mongoose.connection.on('error',err=>{
    console.log('connection failed'); // if error in connected to db
});

mongoose.connection.on('connected',connected=>{
    console.log('connected with db sucessfully....'); // if connected to db
})

//initalize app
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //data recieved should be in JSON

app.use('/user', UserRoute)

//catch wrong route 
app.use(async (req,res,next) => {
    next(createError.NotFound())
})

//error handler 
app.use((err,req,res,next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    })
})

//start app
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('Server running on port 3001')
})