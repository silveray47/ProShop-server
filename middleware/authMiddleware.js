import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req , res , next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
        try {
            const decoded =jwt.verify(token, process.env.JWT_SECRET )
            next()
        } catch(error) {

        }
    }
    

})
 

export default protect
