import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    buyer:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },

    orderItems:[{
        product:{ type:mongoose.Schema.Types.ObjectId, required:true, ref:'Product' },
        quantity:{ type:Number, required:true },
        price:{ type:Number, required:true },
        name:{ type:String, required:true },
        image:{ type:String, required:true },
    }],

    shippingAddress: {
        address:{ type:String, required:true },
        city:{ type:String, required:true },
        ZIPcode:{ type:String, required:true },
        country:{ type:String, required:true },
    },

    paymentMethod: {
        type:String,
        required:true
    },

    paymentResult: {
        id:{type:String},        
        status:{type:String},        
        update_time:{type:String},        
        email_address:{type:String},        
    },

    price:{
        tex: { type:Number, required:true, default:0.0 },
        shipping: { type:Number, required:true, default:0.0 },
        total: { type:Number, required:true, default:0.0 },
    }, 

    payment:{
        isPaid: { type:Boolean, required:true, default:false },
        paidAt: { type:Date },
    },

    delivery:{
        isDelivered: { type:Boolean, required:true, default:false },
        deliveredAt: { type:Date },
    }    
} , {
    timestemps : true
})

const Order = mongoose.model('Order',orderSchema)

export default Order