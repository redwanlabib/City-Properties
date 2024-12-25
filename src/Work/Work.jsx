import WorkImageLeft from "../assets/Work/Rectangle 23.png"
import WorkImageRight from "../assets/Work/Rectangle 24.png"
import circleImage from "../assets/Work/Group 3903.png"
import "./Work.css"


function Work(){
    return(
        <>
        <div className="work">
        <div className="container">
            <div className="work_side">
                <div className="left_side">
                    <h3>Do you want to know,
                    How Us Work?</h3>
                </div>
                <div className="right_side">
                    <p>Let me show you the flow of our work. We want to transparent to you. We believe, you must know what we work for you. We want to educate you what you face today.</p>
                </div>
            </div>
            <div className="work_details">
                <div className="Work_image">
                    <img src={WorkImageLeft} alt="Work_image" />
                    <p>We give you thousand recommendations of Apartment, House also Hotel that can make your life become easier than before. Let’s search what you want below. Cheerio guys.</p>
                    <h5>About Us</h5>
                </div>
                <div className="Work_image">
                <img src={WorkImageRight} alt="Work_image" />
                    <p>After we give you so so much more recommendations. You can choose whatever you want based on your needs. Don’t forget to apply code for discount 50%. Just for today.</p>
                    <h5>Start Searching</h5>
                </div>
            </div>
            <div className="circleImage">
                <img src={circleImage} alt="Image" />
            </div>
        </div>
        </div>
        </>
    )
}

export default Work