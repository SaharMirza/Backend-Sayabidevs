const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const User = require('../Models/user')

//create user
router.post('/register', async (req, res, next) => {
    try {
        const result = req.body
        const doesExist = await User.findOne({ email: result.email })
        if (doesExist) throw createError.Conflict('${result.email} is already been registered')

        const user = new User({
            username: req.body.username,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            address: req.body.address,
            role: req.body.role,
            status: "Active"
        })

        const savedUser = await user.save()

        res.send({ savedUser })

    } catch (error) {
        if (error.isJoi === true) error.status = 422
        next(error)
    }
})

//login user
router.post('/login', async (req, res, next) => {
    try {
        const result = req.body
        const user = await User.findOne({ email: result.email })
        if (!user) throw createError.NotFound('User not registered')
        if (user.status == "InActive") throw createError.NotFound('User has been Deleted')

        const isMatch = await user.isValidPassword(result.password)
        if (!isMatch) throw createError.Unauthorized('Username/password not valid')

        res.send({ user })

    } catch (error) {
        if (error.isJoi === true)
            return next(createError.BadRequest("Invalid Username/Password"))
        next(error)
    }
})

// Read Users
router.get('/', (req, res, next) => {
    User.find() 
    .exec()
    .then(result => {
        res.status(200).json({
            Users: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

//get user by id
router.get('/:id',async(req,res,next)=>{
    User.findById({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            user:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })

})
})

module.exports = router