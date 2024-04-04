import { useNavigate } from "react-router-dom"
import Footer from "../Pages/Footer"
import Navbar from "../Pages/Navbar"

const Shree3Checkout = () => {
    const navigate=useNavigate()

    function adressform(){
        navigate("/adressformshree3")
    }
  return (
    <>
      <Navbar />
     <div>

     <section className="py-12 bg-white sm:py-16 lg:py-20  ">
    <div className="xl:px-4 xl:mx-auto max-w-7xl sm:px-6 lg:px-8 md:my-auto grid place-content-center py-16 xl:py-4">
        <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">CheckOut</h2>
            
        </div>

        <div className="grid max-w-3xl grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-2 gap-y-8 gap-x-8 lg:gap-x-20">
            <div className="relative group ">
                <div className="overflow-hidden rounded-lg xl:w-96 w-80 h-[555px] mx-auto">
                    <img className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125" src="//www.bharatsthali.com/cdn/shop/products/1_f7cf4b4c-7596-4682-a5d0-6fde24698323_1800x1800.jpg?v=1645615397" alt="" />
                </div>
                
                <a href="#" title="">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
            </div>
            <div className="xl:w-96 xl:mt-24 w-80">
                <h1 className="text-2xl font-extrabold">BEIGE AND RED COLORED WOVEN DESIGN SAMBALPURI SAREE</h1>
                <br />
                <br />
                <h3 className="text-xl mt-[-15px] mb-[15px]">Rs: 1000</h3>
                <h3 className="text-xl mt-[-15px] mb-[15px]">Delivery Charge: 100</h3>
                <hr />
                <br />
                <h3 className="text-xl mt-[-15px] mb-[15px]">Total: 1100</h3>
                <br />
                <button onClick={adressform} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto">Proceed To Pay</button>
                <br />
                
            </div>
            
        </div>
    </div>
</section>
     </div>
     <Footer/>
    </>
  )
}

export default Shree3Checkout
