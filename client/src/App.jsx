import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Shree1 from './Pages/Shree1';
import Shree2 from './Pages/Shree2';
import Shree3 from './Pages/Shree3';
import Shree4 from './Pages/Shree4';
import Clothes from './Pages/Clothes';
import homeapplinces from './Pages/Homeapplinces';
import phones from './Pages/Phones';
import Jewellery from './Pages/Jewellery';
import Shree1Checkout from './CheckOutPages/Shree1Checkout';
import Adressform from './CheckOutPages/Adressformshree1';
import Adressformshree2 from './CheckOutPages/Adressformshree2';
import Shree2Checkout from './CheckOutPages/Shree2Checkout';
import Adressformshree3 from './CheckOutPages/Adressformshree3';
import Shree3Checkout from './CheckOutPages/Shree3Checkout';
import Testimonials from './Pages/Testimonials';
import LandingPage from './Pages/LandingPage';
import ContactUs from './Pages/ContactUs';
import About from './Pages/About';
import Reg from './auth/Reg';
import Login from './auth/Login';
import Adminpage from './Pages/Adminpage';
import AdminProduct from './Pages/AdminProduct';
import Cloting from './Pages/Cloting';
import Wishlist from './Pages/Wishlist';
import Checkout from './Pages/Checkout';
import Placedorder from "./Pages/Placedorders"
import AdminOrders from './Pages/AdminOrders';
import Check from './Check';



function App() {
    

  return (
    
    <>
    <Routes>
    
    <Route  path='/reg' Component={Reg} ></Route>

    {/* -----------------------------protected Route----------- */}
    <Route path='/authenticate' Component={Check}>
    <Route  path='home' Component={Home} ></Route>
    <Route  path='admin' Component={Adminpage} ></Route>
    </Route>
    {/* -----------------------------protected Route----------- */}

    {/* <Route  path='/admin' Component={Adminpage} ></Route> */}
    {/* <Route  path='/home' Component={Adminpage} ></Route> */}
    <Route  path='/log' Component={Login} ></Route>
    <Route  path='/wishlist' Component={Wishlist} ></Route>
    <Route  path='/checkout' Component={Checkout} ></Route>
    <Route  path='/placedorder' Component={Placedorder} ></Route>
    <Route  path='/adminproduct' Component={AdminProduct} ></Route>
    <Route  path='/adminorders' Component={AdminOrders} ></Route>
    <Route  path='/' Component={LandingPage} ></Route>
       <Route path='/shree1' Component={Shree1}></Route>
       <Route path='/shree2' Component={Shree2}></Route>
       <Route path='/shree3' Component={Shree3}></Route>
       <Route path='/shree4' Component={Shree4}></Route>
       <Route path='/clothes' Component={Clothes}></Route>
       <Route path='/homeapplinces' Component={homeapplinces}></Route>
       <Route path='/phones' Component={phones}></Route>
       <Route path='/jewellery' Component={Jewellery}></Route>
       <Route path='/cloting' Component={Cloting}></Route>
       <Route path='/contactUs' Component={ContactUs}></Route>
       <Route path='/about' Component={About}></Route>

       {/* checkout Pages */}
       <Route path='/shree1checkout' Component={Shree1Checkout}></Route>
       <Route path='/adressformshree1' Component={Adressform}></Route>
       <Route path='/shree2checkout' Component={Shree2Checkout}></Route>
       <Route path='/shree3checkout' Component={Shree3Checkout}></Route>
       <Route path='/adressformshree2' Component={Adressformshree2}></Route>
       <Route path='/adressformshree3' Component={Adressformshree3}></Route>
       {/* checkout Pages */}

       <Route path='/testimonials' Component={Testimonials} />
       </Routes>
    </>
  
  )
}

export default App
