const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    user:String,
    pname:String,
    price:Number,
    img:String
})

const cartModel = new mongoose.model("cart",cartSchema)
module.exports=cartModel;