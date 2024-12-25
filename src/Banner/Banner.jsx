import { useState } from 'react'
// import Logo from '../assets/Horo/logo.png'
import firstImage from "../assets/Horo/Ellipse 3 (3).png"
import SecondImage from "../assets/Horo/Ellipse 1.png"
import ThirdImage from "../assets/Horo/Ellipse 5.png"
import FourthImage from "../assets/Horo/Ellipse 4.png"
import Add_Image_1 from "../assets/Horo/Item.png"
import Add_Image_2 from "../assets/Horo/Item (1).png"
import Add_Image_3 from "../assets/Horo/Item (2).png"
import Add_Image_4 from "../assets/Horo/Item (3).png"
import Add_Image_5 from "../assets/Horo/Item (4).png"
import Add_Image_6 from "../assets/Horo/Item (5).png"
import './Banner.css'

function Banner() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="hero">
        <div className="left_hero">
          <h1>Best Real Estate Advice for Your Homey</h1>
          <p>We give you thousand recommendations of Apartment, House also Hotel that can make your life become easier than before. Let’s search what you want below</p>
          <div className="btn_3">
            <ul>
              <li>
                <a href=""> <i class="fa-regular fa-circle-dot"></i>Buy</a>
                </li>
              <li>
                <a href=""> <i class="fa-regular fa-circle-dot"></i>Sell</a>
                </li>
              <li>
                <a href=""> <i class="fa-regular fa-circle-dot"></i>Rent</a>
                </li>
            </ul>
          </div>
        </div>
        <div className="right_side">
          <img src={firstImage} alt="image" />
          <img src={SecondImage} alt="image" />
          <img src={FourthImage} alt="image" />
          <img className='ThirdImage' src={ThirdImage} alt="image" />
        </div>
      </div>
      <div className="Add_hero">
        <h2>Don’t worry to Fail. We have Experienced with Big Company’s</h2>
      </div>
      <div className="add_image">
        <img src={Add_Image_1} alt="Image" />
        <img src={Add_Image_2} alt="Image" />
        <img src={Add_Image_3} alt="Image" />
        <img src={Add_Image_4} alt="Image" />
        <img src={Add_Image_5} alt="Image" />
        <img src={Add_Image_6} alt="Image" />
      </div>
    </div>
    </>
  )
}

export default Banner;