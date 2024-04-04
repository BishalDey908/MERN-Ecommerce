
import axios from "axios"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import Navbar from "../Pages/Navbar"

const Login = () => {

    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [user,setUser] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault()

        axios.post(`${import.meta.env.VITE_KEY}login`,{username,password})
        .then((e)=>{
            setUser(e.data.username)
            localStorage.setItem("user",e.data.username)
            console.log("check",e.data)
            
            if(e.data!=="User not found")
            {
            if(e.data.check){
                if(!e.data.auth){
                    console.log(e)
                alert("Successfully Login")
                navigate("/authenticate")
                }
                else {
                    alert("Successfully Login")
                    navigate("/authenticate")
                }
            }else{
                alert("Username or Password is incorrect! Please try again.")
            }
            }else{
                alert("user not found")
            }


            
            // if(e.data ==="Invalid info"){
            //     alert("")
            // }
            
        })
        .catch((err)=>{
            console.log("Failed to send",err)
        })
    }

    const navi = () =>{
     navigate('/reg')
    }

    const forgot = () =>{
        navigate("/forgotpassword")
    }

  return (
    <div>
    {/* <Navbar name={user}/> */}
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit} method="POST">
              <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                      <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" onChange={(e)=>setUserName(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Login</button>

                  
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Create a account <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={navi}>Register here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login
