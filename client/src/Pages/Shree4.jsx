import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import { Carousel } from "@material-tailwind/react";

const Shree4 = () => {
    const navigate=useNavigate()
    function shree1(){
        navigate("/")
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
        src="https://www.bharatsthali.com/cdn/shop/products/final-1_9b5a051a-89c1-489d-8c53-1dc619eb7728_1800x1800.jpg?v=1649310135"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="//www.bharatsthali.com/cdn/shop/products/final-3_7d0c5b4b-a26b-453a-949a-b9789d03c357_1800x1800.jpg?v=1649310679"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="//www.bharatsthali.com/cdn/shop/products/final-5_2f624d56-f164-477b-bb63-95c5d2efe26a_1800x1800.jpg?v=1649310648"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="//www.bharatsthali.com/cdn/shop/products/final-4_48e68958-6a5f-4d5e-865b-72c8eb00bcbd_1800x1800.jpg?v=1649310799"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      
    </Carousel>

<div>
    <div className="xl:w-[900px] xl:mt-[-99px] mt-8 text-center md:pt-60">
        <h1 className="font-serif xl:text-4xl text-2xl">BLUE COLOR PURE COTTON PRINTED HANDLOOM SAREE</h1>
    </div>
    <p className="mt-6 font-bold xl:text-4xl text-3xl">Rs:500 Save 25%</p>

    <div className="xl:w-[800px] my-4">
        <p className="xl:text-2xl text-xs">An appropriate choice for both work wear and evening get-together! A must-have addition to your summer wardrobe!</p>
    </div>

    <div>
        <p className="font-bold xl:text-2xl text-xs">This saree is handcrafted in the villages of Rajasthan India</p>
    </div>

    <div>
    <h3 className="xl:text-2xl text-sm">Fabric : Pure Cotton Saree
            <br/>
            Wash care : Dry Clean Only
            <br/>
            Length : -  6.25 - 6.40 metres
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


export default Shree4
