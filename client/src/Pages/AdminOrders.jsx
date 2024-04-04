
import axios from "axios"
import { useState } from "react"
import Navbar from "./Navbar"

const AdminOrders = () => {

    const [orders, setOrders] = useState([])

    const [pname,setpName]=useState("")
    const [status,setStatus]=useState("")

    axios.get(`${import.meta.env.VITE_KEY}adminplacedorders`)
    .then((e)=>{
      setOrders(e.data.orderinfo)
    //   console.log(orders)
    })

    const orderPrepared = (data) =>{
      setpName(data.productName)
      setStatus("Order Prepare")
        axios.post(`${import.meta.env.VITE_KEY}changestatus`,({productName:data.productName,status:status}))
        console.log(data)
    }

    const OutForDevelery = (data) =>{
      setStatus("Out for delevery")
      axios.post(`${import.meta.env.VITE_KEY}changestatus`,({productName:data.productName,status:status}))
      console.log(data)
  }

  const Deleverd = (data) =>{
    setStatus("Delevered")
    axios.post(`${import.meta.env.VITE_KEY}changestatus`,({productName:data.productName,status:status}))
    console.log(data)
}

  return (
    <div>
    <Navbar/>
      <h1>Admin orders</h1>
      <div className="flex flex-wrap place-content-center pt-20">
      {
        orders.map((data,index)=>(
             
// eslint-disable-next-line react/jsx-key
<div className="mx-4 my-4 place-content-center">
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <img className="rounded-t-lg" src={`${data.img}`} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.pname}</h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data._id}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-3xl bold">{data.productName}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity: {data.quantity}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {data.price}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">User: {data.user}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-3xl">Status: {data.status}</p>
        
        <div className="flex justify-between">
        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>orderPrepared(data)}>Order Prepare</button>

        <button type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded text-xs px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900 ml-2" onClick={()=>OutForDevelery(data)}>Out For Develery</button>

        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={()=>Deleverd(data)}>Deleverd</button>
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

export default AdminOrders
