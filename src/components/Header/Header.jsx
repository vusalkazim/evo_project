import React from 'react'
// import "../../../src/css/Header.css"
import "./Header.scss"
function Header() {
  return (
    <>
      <div className="header">
        <div className="header_left">
            <div className="left_content_item">
               <p> <i class="fa-solid fa-phone"></i> (12) 345 67890</p>
            </div>
            <div className="info_content_item">
              <p><i class="fa-solid fa-envelope"></i> info.colorlib@gmail.com</p>
            </div>
        </div>

        <div className="header_right">
              <div className="right_content_item">
                  <i class="fa-brands fa-facebook"></i> 
                  <i class="fa-brands fa-twitter"></i>               
                  <i class="fa-solid fa-eye"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <button>BOOKING NOW</button>
              </div>
        </div>

      </div>
    </>
  )
}

export default Header