import React from 'react'
import "../Rooms/Rooms.scss"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper';
import img4 from "../../components/img/event-5.jpg"
import img1 from "../../components/img/gallery-1.jpg.webp"

function Rooms() {

    return (
        <>
            <div className="aboutUs">
                <div className="aboutUs_item">
                    <h1>Our Rooms</h1>
                    <div className='link'>
                        <Link className='aboutus_link' to="/">Home</Link>
                        <i class="fa-solid fa-chevron-right"></i>
                        <span> Rooms</span>
                    </div>
                </div>
            </div>
            <div className="slide_room">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[FreeMode, Pagination,Autoplay,Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slide-1">
                            <div className="slide_item">
                                <img src={img1} alt="" />
                                <div className="slide_item_content">
                                    <h4>Premium King Room</h4>
                                    <div className='information'>
                                        <span>159$</span>
                                        <p className='per'>/pernight</p>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>size:</p>
                                        </div>
                                        <div className='i'>
                                            <p>/30ft</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Max persion 3</p>
                                        </div>
                                        <div className='i'>
                                            <p>Capacity:</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Bed:</p>
                                        </div>
                                        <div className='i'>
                                            <p>	King Beds</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Services:</p>
                                        </div>
                                        <div className='i'>
                                            <p>Bathroom,...</p>
                                        </div>
                                    </div>
                                    <button className='btn'>Show More</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="slide-1">
                            <div className="slide_item">
                                <img src={img4} alt="" />
                                <div className="slide_item_content">
                                    <h4>Premium King Room</h4>
                                    <div className='information'>
                                        <span>159$</span>
                                        <p className='per'>/pernight</p>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>size:</p>
                                        </div>
                                        <div className='i'>
                                            <p>/30ft</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Max persion 3</p>
                                        </div>
                                        <div className='i'>
                                            <p>Capacity:</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Bed:</p>
                                        </div>
                                        <div className='i'>
                                            <p>	King Beds</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Services:</p>
                                        </div>
                                        <div className='i'>
                                            <p>Bathroom,...</p>
                                        </div>
                                    </div>
                            <button className='btn'>Show More</button>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="slide-1">
                            <div className="slide_item">
                                <img src={img1} alt="" />
                                <div className="slide_item_content">
                                    <h4>Premium King Room</h4>
                                    <div className='information'>
                                        <span>159$</span>
                                        <p className='per'>/pernight</p>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>size:</p>
                                        </div>
                                        <div className='i'>
                                            <p>/30ft</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Max persion 3</p>
                                        </div>
                                        <div className='i'>
                                            <p>Capacity:</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Bed:</p>
                                        </div>
                                        <div className='i'>
                                            <p>	King Beds</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Services:</p>
                                        </div>
                                        <div className='i'>
                                            <p>Bathroom,...</p>
                                        </div>
                                    </div>
                            <button className='btn'>Show More</button>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="slide-1">
                            <div className="slide_item">
                                <img src={img4} alt="" />
                                <div className="slide_item_content">
                                    <h4>Premium King Room</h4>
                                    <div className='information'>
                                        <span>159$</span>
                                        <p className='per'>/pernight</p>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>size:</p>
                                        </div>
                                        <div className='i'>
                                            <p>/30ft</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Max persion 3</p>
                                        </div>
                                        <div className='i'>
                                            <p>Capacity:</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Bed:</p>
                                        </div>
                                        <div className='i'>
                                            <p>	King Beds</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Services:</p>
                                        </div>
                                        <div className='i'>
                                            <p>Bathroom,...</p>
                                        </div>
                                    </div>
                            <button className='btn'>Show More</button>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="slide-1">
                            <div className="slide_item">
                                <img src={img1} alt="" />
                                <div className="slide_item_content">
                                    <h4>Premium King Room</h4>
                                    <div className='information'>
                                        <span>159$</span>
                                        <p className='per'>/pernight</p>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>size:</p>
                                        </div>
                                        <div className='i'>
                                            <p>/30ft</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Max persion 3</p>
                                        </div>
                                        <div className='i'>
                                            <p>Capacity:</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Bed:</p>
                                        </div>
                                        <div className='i'>
                                            <p>	King Beds</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Services:</p>
                                        </div>
                                        <div className='i'>
                                            <p>Bathroom,...</p>
                                        </div>
                                    </div>
                            <button className='btn'>Show More</button>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="slide-1">
                            <div className="slide_item">
                                <img src={img4} alt="" />
                                <div className="slide_item_content">
                                    <h4>Premium King Room</h4>
                                    <div className='information'>
                                        <span>159$</span>
                                        <p className='per'>/pernight</p>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>size:</p>
                                        </div>
                                        <div className='i'>
                                            <p>/30ft</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Max persion 3</p>
                                        </div>
                                        <div className='i'>
                                            <p>Capacity:</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Bed:</p>
                                        </div>
                                        <div className='i'>
                                            <p>	King Beds</p>
                                        </div>
                                    </div>
                                    <div className='information_gray'>
                                        <div className='i'>
                                            <p>Services:</p>
                                        </div>
                                        <div className='i'>
                                            <p>Bathroom,...</p>
                                        </div>
                                    </div>
                                    <button className='btn'>Show More</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Rooms