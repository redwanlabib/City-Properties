import { useState } from 'react'
import AboutImage from "../assets/About/Ellipse 1 (1).png"
import AboutImage1 from "../assets/About/Ellipse 2.png"
import AboutImage2 from "../assets/About/Ellipse 3 (4).png"
import './About.css'

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="container">
    <div className="About">
      <h4>ABOUT US</h4>
      <h2>Buying or Rent Homey it’s Very Easy.
      Just like Click, Search & Find </h2>
    </div>
    <div className="About_Info">
      <div className="left_side">
        <div className="img">
          <img src={AboutImage2} alt="Image" />
          <img src={AboutImage1} alt="Image" />
          <img className='image1' src={AboutImage} alt="Image" />
        </div>
      </div>
      <div className="right_side">
        <h3>We live on Digital Era 4.0.
        We can help you in Our Expertise about Homey</h3>
        <p>Listing more than one? Enjoy full control over your advertisements, manage your entire space. Once you list a property on our platform, you only have to sit back and watch the world want it.</p>
        <p className='p'>If you’re looking for a real estate service that will operate as an extension to your family - stay with 
        us and see!</p>
        <button class="cta">
        <span>See How We Work</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
      </div>
    </div>
   </div>
   
    </>
  )
}

export default About;
