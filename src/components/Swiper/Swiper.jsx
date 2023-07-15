import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import swiper1 from "../img/swiper-1.jpg";
import swiper2 from "../img/swiper-2.jpg";
import swiper3 from "../img/swiper-3.jpg";
// import "../../../src/css/Swiper.css";
import "./Swiper.scss"


function Swiperr() {
 
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper_img">
            <img className='swiper-1' src={swiper1} alt="" />
          </div>

          <div className="swiper_item">
            <div className="hotel">
              <div className="hotel_content">
                <h1>Sona A Luxury</h1>
                <h1>Hotel</h1>
                <p>Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms</p>
                <button>DISCOVER NOW</button>
              </div>
            </div>
            <div className="form_ata">
              <div className="form">
                <div className="form_content">
                  <h4>Booking Your Hotel</h4>
                  <form action="">
                    <div>
                      <label className='label' htmlFor="checkin">Check In:</label>
                      <input className='form_input' type="date" id='checkin' />
                    </div>
                    <div>
                      <label className='label ' htmlFor="checkout">Check out:</label>
                      <input className='form_input' type="date" id='checkout' />
                    </div>
                    <div>
                      <label className='label ' htmlFor="Adults">Guests:</label> <br />
                      <select className='form_input' name="Adults" id="Adults">
                        <option value="2 Adults">2 Adults</option>
                        <option value="3 Adults">3 Adults</option>
                      </select>
                    </div>
                    <div>
                      <label className='label ' htmlFor="rooms">Room:</label> <br />
                      <select className='form_input' name="rooms" id="rooms">
                        <option value="1 Room">1 Room</option>
                        <option value="2 Room">2 Room</option>
                      </select><br />
                      <button className='form_button'>CHECK AVIALABILITY</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_img">
            <img className='swiper-1' src={swiper2} alt="" />
          </div>


         
          <div className="swiper_item">
            <div className="hotel">
              <div className="hotel_content">
                <h1>Sona A Luxury</h1>
                <h1>Hotel</h1>
                <p>Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms</p>
                <button>DISCOVER NOW</button>
              </div>
            </div>
            <div className="form_ata">
              <div className="form">
                <div className="form_content">
                  <h4>Booking Your Hotel</h4>
                  <form action="">
                    <div>
                      <label className='label ' htmlFor="checkin">Check In:</label>
                      <input className='form_input' type="date" id='checkin' />
                    </div>
                    <div>
                      <label className='label ' htmlFor="checkout">Check out:</label>
                      <input className='form_input' type="date" id='checkout' />
                    </div>
                    <div>
                      <label className='label ' htmlFor="Adults">Guests:</label> <br />
                      <select className='form_input' name="Adults" id="Adults">
                        <option value="2 Adults">2 Adults</option>
                        <option value="3 Adults">3 Adults</option>
                      </select>
                    </div>
                    <div>
                      <label className='label ' htmlFor="rooms">Room:</label> <br />
                      <select className='form_input' name="rooms" id="rooms">
                        <option value="1 Room">1 Room</option>
                        <option value="2 Room">2 Room</option>
                      </select><br />
                      <button className='form_button'>CHECK AVIALABILITY</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_img">
            <img className='swiper-1' src={swiper3} alt="" />
          </div>

          
          <div className="swiper_item">
            <div className="hotel">
              <div className="hotel_content">
                <h1>Sona A Luxury</h1>
                <h1>Hotel</h1>
                <p>Here are the best hotel booking sites, including recommendations for international travel and for finding low-priced hotel rooms</p>
                <button>DISCOVER NOW</button>
              </div>
            </div>
            <div className="form_ata">
              <div className="form">
                <div className="form_content">
                  <h4>Booking Your Hotel</h4>
                  <form action="">
                    <div>
                      <label className='label ' htmlFor="checkin">Check In:</label>
                      <input className='form_input' type="date" id='checkin' />
                    </div>
                    <div>
                      <label className='label ' htmlFor="checkout">Check out:</label>
                      <input className='form_input' type="date" id='checkout' />
                    </div>
                    <div>
                      <label className='label ' htmlFor="Adults">Guests:</label> <br />
                      <select className='form_input' name="Adults" id="Adults">
                        <option value="2 Adults">2 Adults</option>
                        <option value="3 Adults">3 Adults</option>
                      </select>
                    </div>
                    <div>
                      <label className='label ' htmlFor="rooms">Room:</label> <br />
                      <select className='form_input' name="rooms" id="rooms">
                        <option value="1 Room">1 Room</option>
                        <option value="2 Room">2 Room</option>
                      </select><br />
                      <button className='form_button'>CHECK AVIALABILITY</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>


    </>
  )
}

export default Swiperr;