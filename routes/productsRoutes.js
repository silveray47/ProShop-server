import express from 'express';
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
const router = express.Router()


// fatch alll products 
// GET /api/products
// Public
router.get('/', asyncHandler(async (req, res,) => {
    const products = await Product.find({})
    res.json(products)
}));


// fatch a single product by id
// GET /api/products:id
// Public
router.get('/:id', asyncHandler(async (req, res,) => {
    const product = await Product.findById(req.params.id)
    console.log(product);

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'product not found ! ' })
    }

}));









export default router