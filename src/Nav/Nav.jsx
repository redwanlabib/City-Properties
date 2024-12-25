import { useState } from 'react'
import Logo from '../assets/Horo/logo.png'
import viteLogo from '/vite.svg'
import './App.css'

function Nav() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="all_nav">
        <div className="container nav_bar">
          <div className='logo'>
            <img src={Logo} alt="Image" />
          </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Properties</a>
          </li>
          <li>
            <a href="#">Agents</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button class="button"> Log In
        </button>
        </div>
      </nav>
    </>
  )
}

export default Nav;
