
import Footer from "./Footer"
import Navbar from "./Navbar"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <>
      
<Navbar/>
{/* <!-- Component: Testimonial slider --> */}
<h1 className="pt-40 text-center text-4xl">Testimonials</h1>
<div className='xl:w-2/4 m-auto md:w-4/5 '>
      <div className="pt-20 pb-28">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
            <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4 ">
            <div className="flex">
            <img src={require("../assests/quotes.png")} className="w-10 mr-4"  />
              <p className="text-xl font-semibold">{d.name}</p>
              </div>
              <p className="text-center">{d.review}</p>
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>


{/* <!-- End Testimonial slider --> */}

<Footer/>
    </>
  )
}

const data = [
    {
      name: `John Morgan`,
      img: `https://randomuser.me/api/portraits/women/2.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Ellie Anderson`,
      img: `https://randomuser.me/api/portraits/women/79.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Nia Adebayo`,
      img: `https://randomuser.me/api/portraits/women/42.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Rigo Louie`,
      img: `https://randomuser.me/api/portraits/women/63.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Mia Williams`,
      img: `https://randomuser.me/api/portraits/women/44.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    
  ];
  

export default Testimonials
