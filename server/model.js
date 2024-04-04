const mongoose = require("mongoose")


const schema = mongoose.Schema({
    username:String,
    email: { type: String , required : true },
    password:{type:String,required:true},
    token:String,
    isAuth:{type:Boolean,default:false}
})

const model = new mongoose.model("userReg",schema)

module.exports=model;