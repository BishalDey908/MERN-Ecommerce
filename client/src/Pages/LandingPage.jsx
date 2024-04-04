
import React from "react";
import video from "../assests/galaxy.mp4"
import ScrollAnimation from "./ScrollAnimation";
import Typed from 'typed.js';
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Navnoauth from "./Navnoauth";





const LandingPage = () => {
    const el = React.useRef(null);
    const navigate = useNavigate()
    
    
    const Login = () =>{
        navigate("/reg")
    }

    const Signin = () =>{
        navigate("/log")
    }
   

   React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FAST DELEVERY', 'BEST QUALITY PRODUCT',"VALUE FOR MONEY","7 DAY RETURN"],
      typeSpeed: 80,
      showCursor: false,
      
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
   
  return (
    
    <div className="w-full h-full relative">
    
      <Navbar/>
      {/* <Navnoauth/> */}
      <div>
        <video  className="w-full h-full " src={video} autoPlay muted loop/>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white mt-[-150px]">
        <img src={require("../assests/logo-png-removebg-preview.png")} alt="" className="w-80 mx-auto"  />
        <h1 className="focus-in-expand-fwd text-4xl text-white font-extrabold mt-4" >Shopping should be delightful as travalling</h1>
        <h1 className="text-flicker-in-glow text-3xl text-green-200 font-bold mt-4">With Shopper's Delight</h1>
        <div className="h-10 mt-4 text-blue-300 font-bold"><span className="text-2xl my-2" ref={el} /></div>
        <div className="my-10">
        
        <button  className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 text-2xl" onClick={()=>{
            
            alert()
        }}>Explore Now</button>
        </div>
        </div>
        
      </div>
      <Footer/>
    </div>
    
  )
}

export default LandingPage
