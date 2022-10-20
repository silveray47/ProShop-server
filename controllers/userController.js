import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../config/generateToken.js'


// POST /api/users/login 
// public
const authUser = asyncHandler(async (req,res) => {
    
    const {email , userName , password} = req.body
    
    const user = await User.findOne({email:email})
    
    // email 
    // ? user = await User.findOne({email:email}) 
    // : userName 
    // ? user = await User.findOne({userName:userName})
    // : res.status(401).send("auth fail")

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name, 
            userName: user.userName,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else{ 
        res.status(401)
        throw new Error('Invalid email or password')
    }

}) 


// Get /api/users/profile  
// private

const getUserProfile = asyncHandler(async (req,res) => {
    // const user = await User.findById(res.user._id)

    res.send('OK')
})

export {authUser , getUserProfile}