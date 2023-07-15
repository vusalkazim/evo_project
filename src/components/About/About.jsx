import React from 'react'
// import "../../../src/css/About.css"
import "./About.scss"
import about1 from "../../../src/components/img/about-1.jpg";
import about2 from "../../../src/components/img/about-2.jpg"

function About() {
    return (
        <>
            <div className="about">
                <div className="about_left">
                    <div className="about_left_content">
                        <h5>ABOUT US</h5>
                        <h2>Intercontinental LA
                            Westlake Hotel</h2>
                        <p>Sona.com is a leading online accommodation site. We’re passionate about travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41 languages.</p>
                        <p>So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house, or tree house, we’ve got you covered.</p>
                        <button>READ MORE</button>
                    </div>

                </div>
                <div className="about_right">
                    <div className="about_right_content">
                        <div className="about_img">
                            <img src={about1} alt="" />
                        </div>
                        <div className="about_img">
                            <img src={about2} alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About