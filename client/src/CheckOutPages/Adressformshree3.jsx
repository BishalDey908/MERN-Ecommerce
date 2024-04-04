import { useState } from "react"
import Footer from "../Pages/Footer"
import Navbar from "../Pages/Navbar"


const Adressformshree3 = () => {
    const [counter,setCounter]=useState(0)
    const show =(()=>{
      if(counter===0)
      {
        document.querySelector(".qr").style.display = "block";
        document.querySelector("#qrgenerate").innerHTML = "Hide QR Code";
        setCounter(counter+1)
      }
      if(counter===1){
        document.querySelector(".qr").style.display = "none";
        document.querySelector("#qrgenerate").innerHTML = "Show QR Code";
        setCounter(0)
      }
    })
  return (
    <>
      <Navbar/>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-semibold text-xl text-gray-600 xl:mt-12 mt-24">Delevery Address and Payment</h2>
      <p className=" mb-6"><span className="text-2xl font-bold text-red-800">Instruction: </span>First scan and pay then fill the form carefully.Money will not refund</p>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 xl:h-[550px]">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg xl:text-4xl my-2">Scan and pay</p>
            
            <button id="qrgenerate" onClick={show} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 grid place-content-center">Show QR Code</button>
            
                <img style={{display:"none"}}  className="qr w-64 xl:mx-0 xl:my-4 mx-auto my-10" src={require("../assests/phonepayQr code.jpg")} alt="" />
                </div>
        

          <div className="lg:col-span-2 xl:mt-16">
            <form action="https://formspree.io/f/xgejjwyq" method="POST" className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="full_name" name="username">Full Name</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="email">Email Address</label>
                <input  type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" required />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address">Address / Street</label>
                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" required/>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" required/>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="country">Country / region</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  required/>
                  <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" ><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="state">State / province</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" required />
                  <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" ><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" required />
              </div>

              

              <div className="md:col-span-2">
                <h1 className="xl:text-2xl mt-10">Price To Pay</h1>
                <p className="text-2xl">1100</p>
              </div>
      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button onClick={sendMale} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</div>
<Footer/>
    </>
  )
}

export default Adressformshree3
