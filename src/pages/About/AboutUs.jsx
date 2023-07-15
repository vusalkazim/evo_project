import './AboutUs.scss'
import { Link } from 'react-router-dom'
import AboutUsimg from './AboutUsimg/AboutUsimg'
import Discover from './Discover/Discover'
const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
        <div className="aboutUs_item">
          <h1>About Us</h1>
          <div className='link'>
            <Link className='aboutus_link' to="/">Home</Link>
            <i class="fa-solid fa-chevron-right"></i>
            <span> About us</span>
          </div>
        </div>
      </div>
      <div className="sona">
        <div className="sona_left">
          <h1>Welcome To Sona.</h1>
          <p>Built in 1910 during the Belle Epoque period, this hotel is located in the center of Paris, with easy access to the city’s tourist attractions. It offers tastefully decorated rooms.</p>
        </div>
        <div className="sona_right">
          <div className='sona_right_content'>
            <i class="fa-solid fa-chevron-down"></i>
            <p>20% Off On Accommodation.</p>
          </div>
          <div className='sona_right_content'>
            <i class="fa-solid fa-chevron-down"></i>
            <p> Complimentary Daily Breakfast</p>
          </div>
          <div className='sona_right_content'>
            <i class="fa-solid fa-chevron-down"></i>
            <p> 3 Pcs Laundry Per Day</p>
          </div>
          <div className='sona_right_content'>
            <i class="fa-solid fa-chevron-down"></i>
            <p> Free Wifi</p>
          </div>
          <div className='sona_right_content'>
            <i class="fa-solid fa-chevron-down"></i>
            <p>Discount 20% On F&B</p>
          </div>
        </div>
      </div>
      <AboutUsimg />
      <Discover />
    </>
  )
}

export default AboutUs