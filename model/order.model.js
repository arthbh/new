const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user : { type: Number, ref: 'User' },
    books : [{ type: Number, ref: 'Book' }],
    totalAmount: Number
},{
    versionKey:false
})

const OrderModel = mongoose.model("order",orderSchema)

module.exports={
    OrderModel 
}
