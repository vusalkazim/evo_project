import React from 'react'
import "../../About/Discover/Discover.scss"
import galeryleft1 from "../../../components/img/gallery-1.jpg.webp"
import galeryright from "../../../components/img/gallery-2.jpg.webp"
import galeryleft2 from "../../../components/img/galery-3.webp"
import galeryleft3 from "../../../components/img/galery-4.webp"

function Discover() {
  return (
    <>
      <div className="discover">
        <div className="discover_item">
          <h5>OUR GALLERY</h5>
          <h1>Discover Our Work</h1>
        </div>
      </div>
      <div className="galery">
        <div className="galery_left">
          <div className='galery_left_room'>
            <img src={galeryleft1} alt="" />
            <div className="galery-hover">
              <h3>Room Luxury</h3>
            </div>
          </div>
          <div className='galery_left_room_sm'>
            <img src={galeryleft2} alt="" />
            <div className="galery-hover">
              <h3>Room Luxury</h3>
            </div>
          </div>
          <div className='galery_left_room_sm'>
            <img src={galeryleft3} alt="" />
            <div className="galery-hover">
              <h3>Room Luxury</h3>
            </div>
          </div>
        </div>
        <div className="galery_right">
          <img src={galeryright} alt="" />
          <div className="galery-hover">
              <h3>Room Luxury</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default Discover