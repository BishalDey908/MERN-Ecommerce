const dotenv = require("dotenv")
dotenv.config()
const express = require("express");
const mongoose = require("mongoose");
const model = require("./model");
const productModel = require("./productmodel");
const dressModel = require("./dressModel");
const cartModel = require("./cartModel");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const auth = require("./auth");
// const jwtDecode = require("jwt-decode")
const orderModel =require("./orderModel")
// const hashlib = require("hashlib")


const app = express();
let data;

//--------------Middleware-------------------
app.use(
  cors({
    origin: ["https://mern-ecommerce-eta-five.vercel.app/"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// -----------------------fetch userdata and isAdmin-------

app.get("/user", (req, res) => {
  const token = req.cookies.token;
  // console.log(token)
  return res.json({ userdata: token });
});

app.get("/logout", (req, res) => {});

// --------------------------reg----------

app.post("/reg", (req, res) => {
  const { username, email, password } = req.body;

  const token = jwt.sign({ username: username }, "secret");
  console.log(token);
  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      const data = model
        .create({ username, email, password: hashedPassword, token: token })
        .then(() => {
          // token(username)
          res.cookie("token", token);
          res.json("successfully created");
          return res.json({ username: username });
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((e) => {
      console.log("encription failed");
    });
});

// --------------------------login----------
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  model
    .findOne({ username })
    .then((user) => {
      if(user){
      bcrypt.compare(password, user.password, (err, reasult) => {
        if (reasult) {
          console.log(user);
          const token = jwt.sign(
            { username: username, auth: user.isAuth },
            "secret"
          );
          res.cookie("token", token);
          
          return res.json({ username: username, auth: user.isAuth ,"check":true});
          // return res.json({auth:user.isAuth})
          
        } else {
          res.json("Invalid info");
        }
      });
    }else{
      res.json("User not found")
    }
    })
    .catch((err) => {
      console.log(err);
      res.send("user not found");
    });
});

// --------------------create product data---------
app.post("/createProduct", (req, res) => {
  let { pname, price, catagory, img } = req.body;
  if (catagory === "dress") {
    const create = dressModel
      .create({ pname, price, catagory, img })
      .then((e) => {
        res.json({ status: "product created successfully" });
        console.log(`product ${pname} added to the ${catagory} database`);
      })
      .catch((err) => console.log(err));
  }
  if (catagory === "general") {
    const create = productModel
      .create({ pname, price, catagory, img })
      .then((e) => {
        res.json({ status: "product created successfully" });
        console.log(`product ${pname} added to the ${catagory} database`);
      })
      .catch((err) => console.log(err));
  }
});
/// --------------------fetch product data---------

app.get("/getproduct", (req, res) => {
  productModel.find()
    .then((e) => {
      res.json({ productinfo: e });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/getdressProduct", (req, res) => {
  dressModel
    .find()
    .then((data) => {
      res.json({ dressinfo: data });
    })
    .catch((err) => {
      console.log(err);
    });
});

//-------------------delete product data----------
app.post("/deletedata", (req, res) => {
  const { delData, delCatagory } = req.body;

  if (delCatagory === "general") {
    const findData = productModel.findOne({ delData });
    if (findData) {
      productModel
        .deleteOne({ pname: delData })
        .then(() => {
          res.json("data deleted");
          console.log(delData + " is deleted from the server");
        })
        .catch((err) => {
          res.json("data not deleted");
          console.log("Data not deleted", err);
        });
    } else {
      res.json("data not exists");
      console.log("No record found");
    }
  }

  if (delCatagory === "dress") {
    const findData = dressModel.findOne({ delData });
    if (findData) {
      dressModel.deleteOne({ pname: delData })
        .then(() => {
          res.json("data deleted");
          console.log(delData + " is deleted from the server");
        })
        .catch((err) => {
          res.json("data not deleted");
          console.log("Data not deleted", err);
        });
    } else {
      res.json("data not exists");
      console.log("No record found");
    }
  }
});




// ------------------------------Add to wishliat----------

app.post("/wish",(req,res)=>{
const {pname,price,img,user}=req.body;

if(pname){
  console.log("ok",pname)
    cartModel.create({pname,price,img,user})
    .then(()=>{
      res.json("added to wishlist")
        console.log("Success to add wishlist")
    }).catch((err)=>console.log(err))    
}

})


// app.get("/getwishList", (req, res) => {
  
//     cartModel
//       .find()
//       .then((e) => {

//         res.json({ productinfo: e });
//         // console.log(e)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });


  // ----------------------get wishlist item-----
  app.post("/try",(req,res)=>{
    const {userInfo} = req.body
    // console.log(req.body)
    cartModel.find({user:userInfo})
    .then((e)=>{
      res.json({ productinfo: e });
    })
    .catch((err)=>console.log(err))
  })

  // ----------------------get wishlist item number-----
  app.post("/count",(req,res)=>{
    const {user} = req.body
    // console.log(user)
    cartModel.find({user:user})
    .then((e)=>{
      res.json({ productinfo: e });
    })
    .catch((err)=>console.log(err))
  })

  // ------------------------------delete from wishlist----------
  app.post("/deletefromwishlist", (req, res) => {
    console.log(req.body)
    const{deleteId}=req.body
      cartModel.find({_id:deleteId})
        .then((e) => {
          cartModel.deleteOne({ _id: deleteId })
          .then(()=>{
            res.send('Deleted')
            console.log("found")
          })
          .catch((err)=>console.log(err))  
        })
        .catch((err) => {
          console.log(err);
        });
    });

    //---------------------------placed order--------------
    app.post("/placedorder",(req,res)=>{
      const{user,product,quentity,qprice,img}=req.body;
      // console.log(req.body)
      orderModel.create({
        user,
        quantity:quentity,
        productName:product,
        price:qprice,
        img
      })
      .then((e)=>res.json("order placed"))
      .catch((err)=>console.log(err))
    })

    //-----------------------------get all placed order-------------
    app.post("/getplacedorder",(req,res)=>{
      const {user} = req.body
      // console.log(user)
      orderModel.find({user})
      .then((e)=>{
        res.json({"orderinfo":e})
        // console.log(e)
      })
      .catch((err)=>console.log(err))
    })

    app.post("/deleteplacedoder",(req,res)=>{
      console.log(req.body)
      const{id}=req.body

      orderModel.find( { _id:id } )
      .then(()=>{
        orderModel.deleteOne({_id:id})
      .then((e)=>console.log("success to delete",e))
      .catch((err)=>console.log(err))
      })
      
    })

    //-----------------------------get all placed order for admin-------------
    app.get("/adminplacedorders",(req,res)=>{
        orderModel.find({})
        .then((e)=>{
          res.json({"orderinfo":e})
          // console.log(e)
        })
        .catch((err)=>console.log(err))
    })

    //----------------------------
    app.get("/try",(req,res)=>{
      const cookie= req.cookies.token
      // console.log(cookie)
      res.json({"cookie":cookie})
    })

    //-----------------------statuschange--------
    app.post("/changestatus",(req,res)=>{
        console.log(req.body);
        // const status= req.body.status
        // const product= req.body.productName
        
            orderModel.findOneAndUpdate({productName:req.body.productName},{status:req.body.status})
            .then((e)=>console.log(e,"sucess"))
              .catch((err)=>console.log(err))
          
    })

    app.get("/check",(req,res)=>{
      const cookie = req.cookies.token
      // console.log(cookie)
      res.json({cookie})
    })

    
    

// --------------------------db----------
mongoose.connect(`${process.env.CONNECTION_STRING}`)
  .then(() => {
    app.listen(`${process.env.PORT}`, () => {
      console.log(`Listenning on port ${process.env.PORT}`);
    });
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.error("DB Connevction Failed", err);
  });
