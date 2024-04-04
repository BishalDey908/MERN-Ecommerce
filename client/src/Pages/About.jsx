import Footer from "./Footer"
import Navbar from "./Navbar"



const About = () => {
  return (
    <>
    <Navbar/>
      <div id="body">
    <div className="main-container">
        <h2 id="head">Our Team Members</h2>
       <br/>
        <div className="members">
            <div className="team-member">
                <img id="img" src={require("../assests/WhatsApp Image 2023-11-10 at 20.45.00_3f725ac1.jpg")}/>
                <h4 id="name">Bishal Dey</h4>
                <p id="info">Web Developer</p>
            </div>
            <div className="team-member">
                <img  id="img" src={require("../assests/me.jpg")}/>
                <h4 id="name">Kaushik Naiya</h4>
                <p id="info">Web Developer</p>
            </div>
            <div className="team-member">
                <img id="img" src={require("../assests/raj.jpg")}/>
                <h4 id="name">Rajdeep saha</h4>
                <p id="info">Web Developer</p>
            </div>
            <div className="team-member">
                <img id="img" src={require("../assests/WhatsApp Image 2023-11-27 at 14.35.57_e39f5968.jpg")} className="madhav"/>
                <h4 id="name">Madhav Choudhary</h4>
                <p id="info">Web Developer</p>
            </div>
        </div>
    </div>
    
</div>
<Footer/>

    </>
  )
}

export default About
