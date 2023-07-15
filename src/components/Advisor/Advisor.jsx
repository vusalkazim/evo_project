import React from 'react'
import "./Advisor.scss"
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logoadvisor from "../img/logo_advisor.png";

function Advisor() {

    return (
        <>
            <div className="what">
                <h4>TESTIMONIALS</h4>
                <h1>What Customers Say?</h1>
            </div>
            <div className="opsi1">
                <div className="opsi">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="swiper_advisor">
                                <div className="swiper_advisor_content">
                                    <p>After a consturction project took longer than expected , my husband , my dautgher  and l
                                        nedded a place to stay for a few nights . As a Chicago resident, we know a lot about our city, neighboored
                                        and the types of housting optiions available and absolutely love our vacation at Sona Hotel .
                                    </p>
                                    <div className="star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>                                    <span><i class="fa-solid fa-star"></i></span>
                                        <i class="fa-regular fa-star-half-stroke"></i>
                                        <a>-Alexander Vasquez</a> <br />
                                        <img src={logoadvisor} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper_advisor">
                                <div className="swiper_advisor_content">
                                    <p>After a consturction project took longer than expected , my husband , my dautgher  and l
                                        nedded a place to stay for a few nights . As a Chicago resident, we know a lot about our city, neighboored
                                        and the types of housting optiions available and absolutely love our vacation at Sona Hotel .
                                    </p>
                                    <div className="star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>                                    <span><i class="fa-solid fa-star"></i></span>
                                        <i class="fa-regular fa-star-half-stroke"></i>
                                        <a>-Alexander Vasquez</a> <br />
                                        <img src={logoadvisor} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>


        </>
    )
}

export default Advisor