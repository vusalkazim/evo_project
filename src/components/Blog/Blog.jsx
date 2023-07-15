import React from 'react'
// import "../../../src/css/Blog.css"
import "./Blog.scss"
import event1 from "../img/event-1.jpg"
import event2 from "../img/event-2.jpg"
import event3 from "../img/event-3.jpg"
import event4 from "../img/event-4.jpg"
import event5 from "../img/event-5.jpg"
function Blog() {
    return (
        <>
            <div className="blog_word">
                <h6>HOTEL NEWS</h6>
                <h1>Our Blog & Event</h1>
            </div>
            <div className="blog">
                <div className="blog_container">
                    <div className="blogs">
                        <img src={event1} alt="" />
                        <div className="blogs_word">
                            <p className='color-span'>TRAVEL TRIP</p>
                            <p >Tremblant in Canada</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span> 15TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="blogs">
                        <img src={event2} alt="" />
                        <div className="blogs_word">
                            <p className='color-span'>CAMPING</p>
                            <p>Chossing a Static Caravan</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span> 15TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="blogs">
                        <img src={event3} alt="" />
                        <div className="blogs_word">
                            <p className='color-span'>EVENT</p>
                            <p>Copper Canyon</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span> 15TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="blogs-4">
                        <img src={event5} alt="" />
                        <div className="blogs_word">
                            <p className='color-span'>EVENT</p>
                            <p>Trip To Iqaluit in Nanavint A Canadian Arctic City</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span> 15TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="blogs blogs-5">
                        <img src={event4} alt="" />
                        <div className="blogs_word">
                            <p className='color-span'>TRAVEL</p>
                            <p>Travveling To Barcelona</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span> 15TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog