import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useState } from "react"
import Adminpage from "./Pages/Adminpage"
import Home from "./Pages/Home"


const Check = () => {
    
    const [cookie,setCookie] = useState("")
    const [data, setData] = useState("")
    axios.get(`${import.meta.env.VITE_KEY}check`)
    .then((e)=>{
        setCookie(e.data.cookie);
        setData(jwtDecode(cookie).auth)
        console.log(data)
    })
    .catch((err)=>console.log(err))

    if(data){
        return <Adminpage/>
    }else{
        return <Home/>
    }
}

export default Check
