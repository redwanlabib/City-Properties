import cardImage1 from "../assets/Property/Rectangle 31.png"
import cardImage2 from "../assets/Property/Rectangle 31 (1).png"
import cardImage3 from "../assets/Property/Rectangle 31 (2).png"
import cardImage4 from "../assets/Property/Rectangle 31 (3).png"
import cardImage5 from "../assets/Property/Rectangle 31 (4).png"
import cardImage6 from "../assets/Property/Rectangle 31 (5).png"
import reviewPeople1 from "../assets/Property/Ellipse 15.png"
import reviewPeople2 from "../assets/Property/Ellipse 15 (1).png"
import reviewPeople3 from "../assets/Property/Ellipse 15 (2).png"
import reviewPeople4 from "../assets/Property/Ellipse 15 (3).png"
import reviewPeople5 from "../assets/Property/Ellipse 15 (4).png"
import reviewPeople6 from "../assets/Property/Ellipse 15 (5).png"
import "./Property.css"

function properties(){

    return(
        <>
        <div className="container">
            <div className="properties">
                <div className="left_side">
                <h4>properties</h4>
                <h2>Our Latest Properties</h2>
                <p>We are very proud of the service we provide. See what our guests have to
                say about us, our locations and services.</p>
                </div>
                <div className="right_side">
                    <ul>
                        <li>
                            <a href="">Apartments </a>
                        </li>
                        <li>
                            <a href="">Houses </a>
                        </li>
                        <li>
                            <a href="">Rentals</a>
                        </li>
                        <li>
                            <a href="">Sales </a>
                        </li>
                    </ul>
                </div>
            </div> 
            {/* Card Items create */}
           <div className="property_contain">
                <div className="card_items">
                    <div className="card">
                        <div className="card_info">
                            <img src={cardImage1} alt="image" />
                            <p><i class="fa-solid fa-location-dot"></i> Ranch Triangle , Chicago</p>
                            <h3>Beautiful home for sale 
                            in chicago</h3>
                            <h4>$1,500,000</h4>
                            <p>Beautiful, updated, ground level co-oprative apartment in the desirable Bay Terrace neighborhood <span>...More</span></p>
                        </div>
                        <div className="short_details">
                            <p><i class="fa-solid fa-bed"></i> 5</p>
                            <p><i class="fa-solid fa-bath"></i> 3</p>
                            <p><i class="fa-regular fa-clone"></i> 2500 ft</p>
                            <button>Details</button>
                        </div>
                        <div className="review">
                            <div className="review_people">
                            <img src={reviewPeople1} alt="image" />
                            <h4>Maria Barlow</h4>
                            </div>
                            <div className="right_side">
                            <i class="fa-solid fa-share-nodes"></i>
                            <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_info">
                            <img src={cardImage2} alt="image" />
                            <p><i class="fa-solid fa-location-dot"></i> Ranch Triangle , Chicago</p>
                            <h3>Industrial Location 
                            for Rent Ground</h3>
                            <h4>$1,600,000</h4>
                            <p>Beautiful, updated, ground level co-oprative apartment in the desirable Bay Terrace neighborhood <span>...More</span></p>
                        </div>
                        <div className="short_details">
                            <p><i class="fa-solid fa-bed"></i> 5</p>
                            <p><i class="fa-solid fa-bath"></i> 3</p>
                            <p><i class="fa-regular fa-clone"></i> 2500 ft</p>
                            <button>Details</button>
                        </div>
                        <div className="review">
                            <div className="review_people">
                            <img src={reviewPeople2} alt="image" />
                            <h4>John Silver</h4>
                            </div>
                            <div className="right_side">
                            <i class="fa-solid fa-share-nodes"></i>
                            <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_info">
                            <img src={cardImage3} alt="image" />
                            <p><i class="fa-solid fa-location-dot"></i> Ranch Triangle , Chicago</p>
                            <h3>10 Year Old Factory
                            for  Ground </h3>
                            <h4>$1,700,000</h4>
                            <p>Beautiful, updated, ground level co-oprative apartment in the desirable Bay Terrace neighborhood <span>...More</span></p>
                        </div>
                        <div className="short_details">
                            <p><i class="fa-solid fa-bed"></i> 5</p>
                            <p><i class="fa-solid fa-bath"></i> 3</p>
                            <p><i class="fa-regular fa-clone"></i> 2500 ft</p>
                            <button>Details</button>
                        </div>
                        <div className="review">
                            <div className="review_people">
                            <img src={reviewPeople3} alt="image" />
                            <h4>Mark Smith</h4>
                            </div>
                            <div className="right_side">
                            <i class="fa-solid fa-share-nodes"></i>
                            <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_info">
                            <img src={cardImage4} alt="image" />
                            <p><i class="fa-solid fa-location-dot"></i> Ranch Triangle , Chicago</p>
                            <h3>Beautiful home for sale 
                            in chicago</h3>
                            <h4>$1,800,000</h4>
                            <p>Beautiful, updated, ground level co-oprative apartment in the desirable Bay Terrace neighborhood <span>...More</span></p>
                        </div>
                        <div className="short_details">
                            <p><i class="fa-solid fa-bed"></i> 5</p>
                            <p><i class="fa-solid fa-bath"></i> 3</p>
                            <p><i class="fa-regular fa-clone"></i> 2500 ft</p>
                            <button>Details</button>
                        </div>
                        <div className="review">
                            <div className="review_people">
                            <img src={reviewPeople4} alt="image" />
                            <h4>Maria Barlow</h4>
                            </div>
                            <div className="right_side">
                            <i class="fa-solid fa-share-nodes"></i>
                            <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_info">
                            <img src={cardImage5} alt="image" />
                            <p><i class="fa-solid fa-location-dot"></i> Ranch Triangle , Chicago</p>
                            <h3>Beautiful home for sale 
                            in chicago</h3>
                            <h4>$1,900,000</h4>
                            <p>Beautiful, updated, ground level co-oprative apartment in the desirable Bay Terrace neighborhood <span>...More</span></p>
                        </div>
                        <div className="short_details">
                            <p><i class="fa-solid fa-bed"></i> 5</p>
                            <p><i class="fa-solid fa-bath"></i> 3</p>
                            <p><i class="fa-regular fa-clone"></i> 2500 ft</p>
                            <button>Details</button>
                        </div>
                        <div className="review">
                            <div className="review_people">
                            <img src={reviewPeople5} alt="image" />
                            <h4>Maria Barlow</h4>
                            </div>
                            <div className="right_side">
                            <i class="fa-solid fa-share-nodes"></i>
                            <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_info">
                            <img src={cardImage6} alt="image" />
                            <p><i class="fa-solid fa-location-dot"></i> Ranch Triangle , Chicago</p>
                            <h3>Beautiful home for sale 
                            in chicago</h3>
                            <h4>$2,500,000</h4>
                            <p>Beautiful, updated, ground level co-oprative apartment in the desirable Bay Terrace neighborhood <span>...More</span></p>
                        </div>
                        <div className="short_details">
                            <p><i class="fa-solid fa-bed"></i> 5</p>
                            <p><i class="fa-solid fa-bath"></i> 3</p>
                            <p><i class="fa-regular fa-clone"></i> 2500 ft</p>
                            <button>Details</button>
                        </div>
                        <div className="review">
                            <div className="review_people">
                            <img src={reviewPeople6} alt="image" />
                            <h4>Maria Barlow</h4>
                            </div>
                            <div className="right_side">
                            <i class="fa-solid fa-share-nodes"></i>
                            <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        </>
    )
}

export default properties;