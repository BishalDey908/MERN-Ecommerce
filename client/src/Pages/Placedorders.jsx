import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"

const Placedorders = () => {

  const[user,setUser] = useState("")
  const[data,setData] = useState([])
  
  useEffect(()=>{
    setUser(localStorage.getItem('user'))
    
  },[user])

  axios.post("http://localhost:3000/getplacedorder",{user})
  .then((e)=>{
    setData(e.data.orderinfo)
    // console.log(data);
  })
  .catch((err)=>{
     console.log(err)
  })

  const deleteOrder= (data) =>{
    console.log(data._id)
    axios.post("http://localhost:3000/deleteplacedoder",{id:data._id})
    .then((e)=>console.log(e))
    .catch((err)=>console.log(err))
  }

  return (
    <div>
    <Navbar/>
    <h1 className="text-4xl font-serif flex place-content-center mt-36">{`${user}'s Placed Orders`}</h1>
      <div className="mt-28 flex place-content-center">
      {
        data.map((data,index)=>(
             
// eslint-disable-next-line react/jsx-key
<div className="mx-4 my-4 place-content-center ">
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

    <a href="#">
        <img className="rounded-t-lg" src={`${data.img}`} alt=""  />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.productName}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price {data.price} </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity {data.quantity} </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Catagory {data.catagory}</p>
        <div className="flex justify-between">
        <h1 className="text-white">Status: {data.status}</h1>
        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>deleteOrder(data)}>Cancel</button>
        </div>
        
    </div>
</div>
</div>

        ))
        
      }
      </div>
    </div>
  )
}

export default Placedorders
