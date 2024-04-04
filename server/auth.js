// const jwt =require("jsonwebtoken")

const auth = async(req,res,next) =>{
    try{
        const token = req.cookies.jwt;
        next()
    }catch(err){
     console.log(err)
    }
}

module.exports = auth