import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [product, setProduct] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(localStorage.getItem("price"));
  const [user, setUser] = useState("");
  const navigate = useNavigate()

  useEffect(()=>{
    setPrice(parseInt(price))
    console.log(typeof(price))
  },[])

  useEffect(() => {
    setProduct(localStorage.getItem("pname"));
    setImg(localStorage.getItem("img"));
    setPrice(localStorage.getItem("price"));
    console.log(product, img, price);
  }, [product]);

  
  const[quentity,setQuentity] = useState(1)
  const[qprice,setqprice] = useState(localStorage.getItem("price"))
  

  // -----change quentity-----------------
  const increase = () =>{
    if(quentity<8)
    setQuentity(quentity+1)
  }
  useEffect(()=>{
    setqprice(price*quentity)
  },[quentity])
  

  const decrease= () =>{
    if(quentity>1)
    setQuentity(quentity-1)
  }
  // ----------------------

  
  useEffect(()=>{
    setUser(localStorage.getItem("user"))
  },[user])

  const handlePlace =()=>{
    console.log(product,quentity,qprice,img)
    console.log(user)

    

    axios.post(`${import.meta.env.VITE_KEY}placedorder`,{user,product,quentity,qprice,img})
    .then((e)=>{
      if(e.data === "order placed"){
      alert("order placed")
      console.log("successful placed order")
      navigate("/placedorder")
      }
    else{
      alert("unable to order placed")
    }
    })
    .catch((err)=>err)
  }
  // useEffect(()=>{
  //   setPrice(price/quentity)
  // },[quentity])

  return (
    <>

    <Navbar/>
    <h1 className="flex place-content-center mt-32 text-4xl">Procced to Check Out</h1>
    <div className="flex place-content-center mt-14">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={`${img}`}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-96">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product}
          </h5>
          <div className="inline-flex">
            <div className="flex justify-between ">
              <div>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={increase}>
                  +
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={decrease}>
                  -
                </button>
              </div>
              <div className="flex flex-col align-middle">
                <h1 className="ml-11 text-3xl  text-white">Qnt. {quentity} </h1>
                <h1 className="ml-11 mt-6 text-3xl  text-white">Total -  &#8377; {qprice===1 ? price:qprice}</h1>
              </div>
            </div>
          </div>

          <p className="mt-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
            
          </p>
        </div>
      </a>
    </div>
    <div className="flex justify-center my-10">
    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={handlePlace}>Place Order</button>
    </div>
    </>
  );
};

export default Checkout;
