import React from 'react'
// import "../../../src/css/ServiceCard.css"
import "../ServiceCard/ServiceCard.scss"
function ServiceCard() {
  return (
    <>
        <div className="services_header">
                <div className="services_header_content">
                    <h5>WHAT WE DO</h5>
                    <h2>Discover Our Services</h2>
                </div>
        </div>
        <div className='service'>
            <div className="service_container">
                <div className="services">
                    <i class="fa-solid fa-location-dot"></i>
                    <h4>Travel Plan</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className="services">
                    <img width="80" height="80" src="https://img.icons8.com/dotty/80/meal.png" alt="meal"/> 
                    <h4>Catering Service</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className="services">
                    <i class="fa-solid fa-location-dot"></i>
                    <h4>Babysitting</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className="services">
                    <i class="fa-solid fa-warehouse"></i>
                    <h4>Laundry</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className="services">
                    <i class="fa-solid fa-car"></i>
                    <h4>Hire Drive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <div className="services">
                    <i class="fa-solid fa-martini-glass"></i>
                    <h4>Bar & Drink</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>
        </div>
        
        
    </>
  )
}

export default ServiceCard