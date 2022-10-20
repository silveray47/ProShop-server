import mongoose from 'mongoose'


const orderSchema = mongoose.Schema({

    orderItems: {
        type:mongoose.Schema.Types.ObjectId, 
        required:true, 
        ref:'Product'
    },

    winer: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    },

    price: {
        satrtingPrice: {type:Number, required:true, default:0.0},
        buyOutPrice: {type:Number, required:true, default:0.0},
        bidStep: {type:Number, required:true, default:0.0}, 
    },
    time:{
        start: {type:Text , required:true},
        duration: {type:Number, required:true, default:0.0 }
    },
    bids:[{ 
        user:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
        bid: { type:Number, required:true, default:0.0 },
        bidTime: { type:Text , required:true},
        autoBid: {type:Boolean},
        maxBid: {type:Number, default:0.0}
    }]

} , {
    timestemps : true
})