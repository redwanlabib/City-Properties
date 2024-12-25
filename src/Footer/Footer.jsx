import footerLogo from "../assets/Horo/logo.png"
import "./Footer.css"

function Footer(){
    return(
        <>
            <div className="container">
                <div className="footer_section">
                    <div className="card">
                        <div className="dhot_image">
                        <i class="fa-regular fa-flag"></i>
                        </div>
                        <h2>34M</h2>
                        <p>Money In & Out</p>
                    </div>
                    <div className="card">
                        <div className="dhot_image">
                        <i class="fa-solid fa-user-check"></i>
                        </div>
                        <h2>208K</h2>
                        <p>Total Host of Homey</p>
                    </div>
                    <div className="card">
                        <div className="dhot_image">
                        <i class="fa-solid fa-users"></i>
                        </div>
                        <h2>31K</h2>
                        <p>New hosts per month</p>
                    </div>
                    <div className="card">
                        <div className="dhot_image">
                        <i class="fa-solid fa-face-smile"></i>
                        </div>
                        <h2>3B+</h2>
                        <p>Total happy Customer</p>
                    </div>
                </div>
                <div className="SingUP">
                    <h3>Sign Up Now  to see Newest Update about 
                    Real Estate from Entire the World</h3>
                    <p>Just insert your email into the field below. You already can to know update about Real Estate from entire the world. What are you waiting for?</p>
                    <div className="from">
 
                        <div class="input-wrapper">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="text" name="email" class="input" placeholder="Your Email" />
                        <button class="Subscribe-btn">
                        <i class=" arrow fa-solid fa-handshake"></i>
                        Subscribe
                        </button>
                        </div>

                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                  <div className="main_cantainer">
                  <div className="footer_contain">
                        <div className="footer_image">
                            <img src={footerLogo} alt="footer_image" />
                            <p>Build a modern and creative website with crealand</p>
                            <div className="social">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-github"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                        <div className="others_info">
                            <ul>
                                <li className="li">Product</li>
                                <li>Landingpage</li>
                                <li>Documentation</li>
                                <li>Referral Program</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                        <div className="others_info">
                            <ul>
                                <li className="li">Services</li>
                                <li>Documentation</li>
                                <li>Design</li>
                                <li>Themes</li>
                                <li>Illustrations</li>
                                <li>UI Kit</li>
                            </ul>
                        </div>
                        <div className="others_info">
                            <ul>
                                <li className="li">Company</li>
                                <li>About</li>
                                <li>Terms</li>
                                <li>Privacy Policy</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="others_info">
                            <ul>
                                <li className="li">More</li>
                                <li>Documentation</li>
                                <li>License</li>
                                <li>Referral Program</li>
                                <li>Changelog</li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  <div className="copy">
                    <h5> 2024 <span>Redwan Labib </span>All Rights Reserved.</h5>
                  </div>
                </div>
            </footer>
        </>
    )

}

export default Footer