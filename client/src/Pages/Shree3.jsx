import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import { Carousel } from "@material-tailwind/react";

const Shree3 = () => {
    const navigate=useNavigate()
    function shree1(){
        navigate("/shree3checkout")
        document.querySelector("#default-carousel").location.reload(true);
    }
  return (
    <>
             <div className="xl:mt-[-32px] md:mt-[-18px] mt-[-18px]">
             <Navbar/>
             </div>
             {/* ------------------------------------------------------navbar End---------------------------------------------- */}
             <div className="flex xl:gap-16 xl:place-content-center xl:my-8 xl:flex-row flex-col place-content-center my-4 mx-4">
    <Carousel
      className="rounded-xl mt-24"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="//www.bharatsthali.com/cdn/shop/products/1_f7cf4b4c-7596-4682-a5d0-6fde24698323_1800x1800.jpg?v=1645615397"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="//www.bharatsthali.com/cdn/shop/products/2_78df6e07-439f-41da-b66b-cf5d096ec7e6_1800x1800.jpg?v=1645615449"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="//www.bharatsthali.com/cdn/shop/products/3_f1ffadbc-4ed8-48ba-8592-31a689d26bbf_1800x1800.jpg?v=1645618326"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="//www.bharatsthali.com/cdn/shop/products/5_140011b6-6803-4a81-a6a5-74ce46ccea28_1800x1800.jpg?v=1645618368"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      
    </Carousel>

<div>
    <div className="xl:w-[900px] xl:mt-[-99px] mt-8 text-center md:pt-60">
        <h1 className="font-serif xl:text-4xl text-2xl">BEIGE AND RED COLORED WOVEN DESIGN SAMBALPURI SAREE</h1>
    </div>
    <p className="mt-6 font-bold xl:text-4xl text-3xl">Rs:1000 Save 25%</p>

    <div className="xl:w-[800px] my-4">
        <p className="xl:text-2xl text-xs">Handloom weaved saree made with threads of Pure fabric. The model is wearing a blouse from our stylist's collection,actual blouse will be 90-95% similar to this. See the image for a mock-up of what the actual blouse would look like.</p>
    </div>

    <div>
        <p className="font-bold xl:text-2xl text-xs">This saree is handcrafted in the villages of Rajasthan, India</p>
    </div>

    <div>
    <h3 className="xl:text-2xl text-sm">Fabric : Silk Cotton Saree
            <br/>
            Wash care : Dry Clean Only
            <br/>
            Length : -  6.25 - 6.40 meters
            <br/>
            Blouse : Included
            </h3>
    </div>
    <div className="mt-4">
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg xl:text-3xl text-2xl px-5 py-2.5 text-center mr-2 mb-2 xl:w-96 w-full">Add To Cart</button>

    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg xl:text-3xl text-2xl px-5 py-2.5 text-center mr-2 mb-2 xl:w-96 w-full" onClick={shree1}>Buy Now</button>
</div>
</div>


             </div>
                    



                </>
  )
}

export default Shree3
