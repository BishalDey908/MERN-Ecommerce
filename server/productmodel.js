const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    pname:{type:String,required:true},
    price:Number,
    catagory:String,
    img:String
})

const productModel = new mongoose.model("product",schema)

module.exports=productModel;