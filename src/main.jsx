import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav/Nav.jsx'
import  Banner from "./Banner/Banner.jsx"
import About from "./About/About.jsx";
import Property from "./Properties/Property.jsx";
import Work from "./Work/Work.jsx";
import Footer from "./Footer/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <>
    <Nav />
    <Banner />
    <About/>
    <Property/>
    <Work/>
    <Footer/>
    </>
  </StrictMode>,
)
