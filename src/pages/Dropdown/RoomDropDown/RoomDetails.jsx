import React from 'react'
import "./RoomDetails.scss"
import RoomDetails1 from "../../../components/img/room-b2.jpg"
import RoomDetails2 from "../../../components/img/room-b3.jpg"

function RoomDetails() {
    return (
        <>
            <div className="room_details">
                <div className="room_details_left">
                    <img src={RoomDetails1} alt="" />
                    <div className="rating">
                        <div>
                            <h2>Premium King Room</h2>
                        </div>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <button>BOOKING NOW</button>
                        </div>
                    </div>
                </div>
                <div className="room_details_right">
                    <img src={RoomDetails2} alt="" />
                    <div className="rating">
                        <div>
                            <h2>Premium King Room</h2>
                        </div>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <button>BOOKING NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="room_detail_word">
                <div className="room_detail_word_left">
                    <p>
                    Motorhome or Trailer that is the question for you. Here are some of the advantages and disadvantages of both, so you will be confident when purchasing an RV. When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth wheeler? The advantages and disadvantages of both are studied so that you can make your choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an achievement of a lifetime. It can be similar to sojourning with your residence as you search the various sites of our great land, America.

The two commonly known recreational vehicle classes are the motorized and towable. Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth wheel has the attraction of getting towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you are parked at your campsite
                    </p>
                </div>
                <div className="room_detail_word_right">
                    <p>
                        
In Nepal your overseas adventure travel is going to be fascinating. You will get to see the Himalayan Mountains and experience all that the rich Nepalese culture has to offer. They are an amazing people who have managed to hang on to their own culture and beliefs longer than most other countries. When overseas adventure travel takes you to Nepal you will have the chance to see all of the fantastic and one of a kind lakes and forests and you can even spend days or weeks camping out in their forests with a specialized guide. And the waterfalls in Nepal are to die for, you will never see anything more gorgeous in your life as their waterfalls! This should be at the top of your overseas adventure travel destination list for sure! Only overseas adventure travel in Nepal will give you these kinds of opportunities so
                    </p>
                </div>
            </div>

        </>
    )
}

export default RoomDetails