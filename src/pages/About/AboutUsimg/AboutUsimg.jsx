import React from 'react'
import "../AboutUsimg/AboutUsimg.scss"
import AboutUs1 from "../../../../src/components/img/about-1.jpg"
import AboutUs2 from "../../../../src/components/img/about-2.jpg"
import AboutUs3 from "../../../components/img/about-p3.jpg"

function AboutUsimg() {
  return (
    <>
        <div className="AboutUsimg">
            <div className="jpeg">
                <img src={AboutUs1} alt="" />
                <div className="aboutus_word">
                    <h3>Restaurants Services</h3>
                </div>
            </div>
            <div className="jpeg">
                <img src={AboutUs2} alt="" />
                <div className="aboutus_word">
                    <h3>Travel & Camping</h3>
                </div>
            </div>
            <div className="jpeg">
                <img src={AboutUs3} alt="" />
                <div className="aboutus_word">
                    <h3>Event & Party</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUsimg