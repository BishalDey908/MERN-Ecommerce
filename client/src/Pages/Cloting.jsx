import axios from "axios"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



const Cloting = () => {
    const [products, setProducts] = useState([])
    // console.log(product,img,price)
    

    axios.get(`${import.meta.env.VITE_KEY}getdressProduct`)
    .then((res)=>{
        setProducts(res.data.dressinfo)
        // console.log(res.data.dressinfo)
    })
    .catch((err)=>{
        console.log(err)
    })
    // console.log(id)


    const handlesubmit = (data)=>{
      
       localStorage.setItem("name",data.pname)
       localStorage.setItem('image', data.img);
       localStorage.setItem('price', data.price)
       

       
      
      if(data.pname!==null){
        
          axios.post(`${import.meta.env.VITE_KEY}wish`,{pname:localStorage.getItem("name"),price:localStorage.getItem("price"),img:localStorage.getItem("image"),user:localStorage.getItem("user")})
      .then((e)=>{
        if(e.data==="added to wishlist"){
          console.log("ALL ok")
          alert("Added To WishList")
        }
      })
      .catch((err)=>{
        console.log(err)
      })
      }
      
      
      
    }
    const navigate = useNavigate()

const setData = (data) =>{
     localStorage.setItem("pname",data.pname);
     localStorage.setItem("img",data.img);
     localStorage.setItem("price",data.price);
     console.log("set to loalhost",data)
     navigate("/checkout")
}
    
const[token,setToken] =useState("")

axios.get(`${import.meta.env.VITE_KEY}try`)
.then((e)=>{
 if(e.data.cookie){
 setToken(e.data.cookie)
 }
else{
// setToken("PLZ LOGIN FIRST")
}
})
.catch((err)=>{
 console.log(err)
})
    
  return (
    <div>
      <div>
    <Navbar/>
    <h1 className="text-4xl font-serif flex place-content-center mt-36">Latest Dresses</h1>
      <div className="flex flex-wrap place-content-center pt-20">
      {
        products.map((data,index)=>(
             
// eslint-disable-next-line react/jsx-key
<div className="mx-4 my-4 place-content-center">
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
     
    <a href="#">
        <img className="rounded-t-lg" src={`${data.img}`} alt=""  />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.pname}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price {data.price} </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Catagory {data.catagory}</p>
        <div className="flex justify-between">
        {
          token ? <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>setData(data)}>
            Buy Now
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> : <a href="#" className=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
            PLEASE LOGIN TO BUY
             
        </a>
        }
        
        {
          token ? <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>{handlesubmit(data)}}>Add to Wishlist</button> : <button type="button" className="hidden focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>{handlesubmit(data)}}>Add to Wishlist</button>
        }
        
        </div>
        
    </div>
</div>
</div>

        ))
        
      }
    </div>
    </div>
    </div>
  )
}

export default Cloting
