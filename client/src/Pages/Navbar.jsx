/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";
import axios from "axios";
import { jwtDecode } from "jwt-decode"
import cookie from "js-cookie"

// import axios from "axios";



const Navbar = () => {
    const [close,setClose]=useState(1)
    const [user,setUser] = useState("")
    const [auth,setAuth] = useState("")
    const [token,setToken] = useState("")
    const [vUser,SetVuser] =useState("")
    
    const[productnum,setProductNum] = useState()
    
    
    // const[wishlistData,setWishListData]=useState("")

    axios.defaults.withCredentials=true
    axios.get(`${import.meta.env.VITE_KEY}user`)
    .then((e)=>{
        setToken(e.data.userdata);
        setUser(jwtDecode(token).username)
        setAuth(jwtDecode(token).auth)
        SetVuser(true)
    })
    .catch((err)=>{
        // console.log("Failed to send",err)
        
    })

    const logout = ()=>{
        cookie.remove("token")
        SetVuser(false)
        navigate("/log")
        
    }
    
    useEffect(()=>{
        setUser(localStorage.getItem("user"))
        console.log("nav",user)
    },[productnum])

    
    axios.post(`${import.meta.env.VITE_KEY}count`,{user})
        .then((e)=>{
            // console.log("number ok",e.data.productinfo.length)
            setProductNum(e.data.productinfo.length)
        })
        .catch((err)=>console.log(err))
    
    // 
    // .then((e)=>{
    //     // console.log("wishlist data",e.data.productinfo.length)
    //     setWishListData(e.data.productinfo.length)
    // })
    // .catch((err)=>console.log(err))
    
    
    const navigate=useNavigate()
    
    const Login = () =>{
        navigate("/reg")
    }

    const Signin = () =>{
        navigate("/log")
    }

    const adminpage = ()=>{
        navigate("/admin")
    }

    const wishlist =()=>{
        navigate("/wishlist")
    }

    const myorders = ()=>{
        navigate("/placedorder")
    }
  return (
    <>
    <nav className=" border-gray-200 py-2.5 bg-blue-950 xl:h-20 bg-opacity-40 fixed top-0">
    
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto pt-2">
            <a href="#" className="flex items-center my-auto">
                <img src={require("../assests/logo-png-removebg-preview.png")} className="mr-3 sm:h-9 " alt="Landwind Logo"/>
                
            </a>
            <div className="flex items-center lg:order-2 gap-2">
                <div className="hidden mt-2 mr-4 sm:inline-block">
                    <span></span>
                </div>
                 
                
                <button data-collapse-toggle="mobile-menu-2" type="button"
                
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
                    aria-controls="mobile-menu-2" aria-expanded="true" >
                    <span className="sr-only">Open main menu</span>
                    <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            ></path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            ></path>
                    </svg>
                </button>
                <div className=" hidden xl:flex">
                <div className="xl:flex hidden ">
                
                </div>
                </div>
                {/* --------------------condition to show login and logout button------------------------ */}
                
                
                {
                    token ? <button id="logout" type="button" className="bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto"  onClick={logout}>Log Out</button>:<button id="logout" type="button" className="bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto"  onClick={Signin}>Log In</button>
                }
                {
                    token ?<button id="logout" type="button" className="bg-gradient-to-r hidden bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto"  onClick={Login}>Sign In</button> : <button id="logout" type="button" className="bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto"  onClick={Login}>Sign In</button>
                } 
                
                {
                    token ?<button id="logout" type="button" className="bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto"  onClick={wishlist}>Wishlist {productnum} </button>:<button id="logout" type="button" className="hidden bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto"  onClick={wishlist}>wishlist</button>
                }

                {
                    token  ?<button id="logout" type="button" className="bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto"  onClick={myorders}>My orders</button>:<button id="logout" type="button" className="hidden bg-gradient-to-r bg-green-400 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 my-auto"  onClick={myorders}>My orders</button> 
                }
                {
                    token ?  <h1 className="text-xl font-serif text-blue-700">Hii, {user}</h1> : <h1 ></h1>
                }
                    
                    
                {/* <img src={user.name} alt="" className="h-10 xl:hidden block rounded-full mx-auto my-4 " /> */}
            </div>
            <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 " id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:ml-40">
                
                <li>
                    {
                        auth ? <Link to="/authenticate" id="title1"
                            className=" hover-underline-animation block py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent  lg:p-0  xl:text-xl text-center w-full text-lg "
                            aria-current="page" >Admin</Link>:<Link to="/authenticate" id="title1"
                            className=" invisible hover-underline-animation block py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent  lg:p-0  xl:text-xl text-center w-full text-lg "
                            aria-current="page" >Admin</Link>
                    }
                    </li>
                    <li>
                    {
                         token ? <Link to="/adminproduct" id="title1"
                            className=" hover-underline-animation  py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent  lg:p-0  xl:text-xl text-center w-full text-lg "
                            aria-current="page" >General</Link>:<Link to="/adminproduct" id="title1"
                            className="hidden "
                            aria-current="page">Latest Product</Link>
                    }
                    </li>
                    <li>
                    {
                        auth ? <Link  id="title1" to="/authenticate"
                            className="hidden"
                            aria-current="page"  >SALE</Link>: <Link to="/authenticate"   id="title1"
                            className=" hover-underline-animation block py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent  lg:p-0  xl:text-xl text-center w-full text-lg "
                            aria-current="page"  >SALE</Link>
                    }
                    </li>

                    <li>
                    {
                        auth ? <Link  id="title1" to="/cloting"
                            className="hover-underline-animation  py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent  lg:p-0  xl:text-xl text-center w-full text-lg"
                            aria-current="page"  >Dress</Link>: <Link id="title1" to="/cloting"
                            className=" hover-underline-animation  py-2 pl-3 pr-4 text-white  rounded lg:bg-transparent  lg:p-0  xl:text-xl text-center w-full text-lg "
                            aria-current="page"  >Dress</Link> 
                    }
                    </li>
                </ul>
            </div>
            
        </div>
        <ScrollAnimation/>
    </nav>
    
    </>
  )
}

export default Navbar
