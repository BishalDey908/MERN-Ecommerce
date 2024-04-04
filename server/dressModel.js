const mongoose = require("mongoose")

const dressSchema = new mongoose.Schema({
    pname:{type:String,required:true},
    price:Number,
    catagory:String,
    img:String
})

const dressModel = new mongoose.model("dress",dressSchema)
module.exports=dressModel;