const mongoose =require("mongoose")

const orderSchema = mongoose.Schema({
    user:String,
    quantity:Number,
    productName:String,
    price:Number,
    img:String,
    status:{type:String,default:"pending"}
})

const orderModel = new mongoose.model("order",orderSchema)

module.exports=orderModel