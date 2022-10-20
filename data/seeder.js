import mongoose from "mongoose";
import dotenv from 'dotenv';
import users from './users.js'
import products from "./products.js";
import User from '../../models/userModel.js';
import Product from '../../models/productModel.js';
import Order from '../../models/orderModel.js';
import connectDB from '../config/connectDB.js'

dotenv.config()
connectDB()

const importData = async ( ) =>{


    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const admiUsers = await User.findOne({userName:"admin"})
        console.log(admiUsers._id);
        const adminUser =admiUsers._id

        const sampleProducts = products.map(product => {
            return {...product, owner:adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('data importet');
        process.exit()

    } catch (error){
        console.log(`${error}`);
        process.exit(1)
    }
}

const destroyData = async () =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('data destroyed');
        process.exit()

    } catch (error){
        console.log(`${error}`);
        process.exit(1)
    }
}

if (process.argv[2] === '-d' || process.argv[2] === '--destroy') {
    destroyData()
} else {
    importData()
}