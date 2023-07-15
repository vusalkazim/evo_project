import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Navbar.scss";

function Navbar() {
    let [translateX,setTranslateX] = useState(-100)
    // let [click,setClick] = useState(false)
    function clickFunc() {
      // (!click)
      if(translateX === -100){
        setTranslateX(prev=>prev+100)
      }
      else{
        setTranslateX(prev=>prev-100)
      }
    }

  return (
    <>
      <nav>
        <div className="navbar_left">
          <div className="left_word">
            <p>Sona</p>
          </div>
          <div></div>
        </div>
        <button  className="bars" onClick={() => clickFunc()}>
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
        </button>
        <div className="navbar_right">
          <Link className='nav_link2' to="/">Home</Link>
          <Link className='nav_link2' to="/rooms">Rooms</Link>
          <Link className='nav_link2' to="/aboutus">About Us</Link>
          <Link className='nav_pages_link' to="">
            Pages
              <div className="dropdown">
                <Link className='dropdown_link' to="/dropdownblog">Blog Details</Link>
                <Link className='dropdown_link' to="/roomdetails">Room Details</Link>
              </div>
          </Link>
          <Link className='nav_link2' to="/news">News</Link>
          <Link className='nav_link2' to="/contact">Contact</Link>
          {/* <div>
            <input type="text" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div> */}
        </div>
      </nav>
      <div className="menu"  style={{transform : `translateX(${translateX}%)`}}>
          <Link className='menu_link' to="/">Home</Link>
          <Link className='menu_link' to="/rooms">Rooms</Link>
          <Link className='menu_link' to="/aboutus">About Us</Link>
          <Link className='menu_link' to="/news">News</Link>
          <Link className='menu_link' to="/contact">Contact</Link>
          <div className='sosial'>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-youtube"></i>
          </div>
      </div>
    </>
  )
}

export default Navbar