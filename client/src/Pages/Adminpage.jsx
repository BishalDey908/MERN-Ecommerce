import axios from "axios"
import { useState } from "react"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

const Adminpage = () => {
  const[pname,setPname]=useState("")
  const[price,setPrice]=useState("")
  const[catagory,setCatagory]=useState("")
  const[img,setImg]=useState("")
  const[delData,setDelData] =useState("")
  const[delCatagory,setDelCatagory] =useState("")

  const handleSubmit= (e)=>{
    e.preventDefault()

    axios.post(`${import.meta.env.VITE_KEY}createProduct`,{pname,price,catagory,img})
  .then((e)=>{
    if(e.data.status==="product created successfully"){
      alert("product added to the database")
    }else{
      alert("Failed to add product on the database")
    }
  })
  .catch((err)=>{
    console.log(err)
  })

  }

  const handleDelete = (e)=>{
    console.log(delData)
   e.preventDefault()
   axios.post(`${import.meta.env.VITE_KEY}deletedata`,{delData,delCatagory})
   .then((e)=>{
    if(e.data==="data deleted")
    {
      alert("data has been deleted")
    }
    if(e.data==="data not deleted")
    {
      alert("unable to delete data")
    }
    if(e.data==="data not exists")
    {
      alert("data not exista")
    }
   })
  }

  


  
  return (
    <>
      
    <div>
    <Navbar/>
    <div className="flex place-content-center mt-32 mb-[-130px] ">
      <h1 className="text-4xl">Admin Panel</h1>
      </div>
      <form action="" method="post" onSubmit={handleSubmit}>
      <div className="mx-96 my-52 bg-blue-500 rounded shadow-xl shadow-current ">
      <h2 className="flex place-content-center pt-8 mb-[-20px] text-xl">Add Product</h2>
      <div className="mx-10 py-10">
      <div>
            <label htmlFor="product name" className="block mb-2 text-sm font-medium text-gray-900">Enter Product Name</label>
            <input name="pname" type="text" id="product_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setPname(e.target.value)}  required />
        </div>
        <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Enter Price Here</label>
            <input name="price" type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setPrice(e.target.value)} required />
        </div>
        <div>
            <label htmlFor="catagory" className="block mb-2 text-sm font-medium text-gray-900 ">Enter Product Catagory Name (dress,general)</label>
            <input name="catagory" type="text" id="catagory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setCatagory(e.target.value)} required />
        </div>
        <div>
            <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 ">Enter Product Img Link Here (600x303)</label>
            <input name="img" type="text" id="catagory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setImg(e.target.value)} required />
        </div>
        
        <button type="submit" className="text-white my-4 mx-60 w-80 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        
        <Link className="flex place-content-center mx-60 bg-blue-700 py-2 rounded-full w-80 textwhite" to="/adminorders">Admin Orders</Link>
        
        </div>
        </div>
        </form>

        <div className="mx-96">
        <div className=" py-12 h-72  my-20 w-full flex place-content-center bg-blue-500 rounded shadow-xl shadow-current ">
        <form action="" method="post" onSubmit={handleDelete}>
        <h2 className="flex place-content-center mt-[-10px] mb-2 text-xl">Delete a Product</h2>
        <div>
            <label htmlFor="product name" className="block mb-2 text-sm font-medium text-gray-900">Enter Product Name</label>
            <input name="pname" type="text" id="product_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setDelData(e.target.value)}  required />
        </div>
        <div>
            <label htmlFor="product name" className="block mb-2 text-sm font-medium text-gray-900">Enter Product Catagory Name (dress,general)</label>
            <input name="pname" type="text" id="product_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setDelCatagory(e.target.value)}  required />
        </div>

        <div className="pr-72">
        <button type="submit" className="text-white my-4 mx-72  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-60">Delete</button>
        </div>
        </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Adminpage
