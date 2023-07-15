import React from 'react'
import "./News.scss"
import { Link } from 'react-router-dom'
import news1 from "../../components/img/event-1.jpg"
import news2 from "../../components/img/event-2.jpg"
import news3 from "../../components/img/event-3.jpg"
import news4 from "../../components/img/blog-4.jpg"
import news5 from "../../components/img/blog-5.jpg"
import news6 from "../../components/img/blog-6.jpg"
import news7 from "../../components/img/blog-7.jpg"
import news8 from "../../components/img/blog-8.jpg"
import news9 from "../../components/img/blog-9.jpg"

function News() {
    return (
        <>
            <div className="blog_news">
                <div className="blog_news_item">
                    <h1>Blog </h1>
                    <div className='news_link'>
                        <Link className='News_link' to="/">Home</Link>
                        <i class="fa-solid fa-chevron-right"></i>
                        <span> Blog Grid</span>
                    </div>
                </div>
            </div>
            <div className="news">
                <div className="news_container">
                    <div className="news_card">
                        <img src={news1} alt="" />
                        <div className="news_position">
                            <p className='p1 p1-travel'>TRAVEL TRIP</p>
                            <p className='big-word'>Tremblant in Canada</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span className='oclock'> 15TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="news_card">
                        <img src={news2} alt="" />
                        <div className="news_position">
                            <p className='p1'>CAMPING</p>
                            <p className='big-word'>Choosing A Static Caravan </p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span className='oclock'> 15TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="news_card">
                        <img src={news3} alt="" />
                        <div className="news_position">
                            <p className='p1'>EVENT</p>
                            <p className='big-word'>Copper Canyon </p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span className='oclock'> 21TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="news_card">
                        <img src={news4} alt="" />
                        <div className="news_position">
                            <p className='p1 p1-travel'>TRIVAGO</p>
                            <p className='big-word'>A Time Travel Postcard</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span className='oclock'> 22TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="news_card">
                        <img src={news5} alt="" />
                        <div className="news_position">
                            <p className='p1'>CAMPING</p>
                            <p className='big-word'>A Time Travel Postcard</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span className='oclock'> 25TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="news_card">
                        <img src={news6} alt="" />
                        <div className="news_position">
                            <p className='p1 p1-travel'>TRAVEL TRIP</p>
                            <p className='big-word'>Virginia Travel For Kids</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span className='oclock'> 28TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="news_card">
                        <img src={news7} alt="" />
                        <div className="news_position">
                            <p className='p1 p1-travel'>TRAVEL TRIP</p>
                            <p className='big-word'>Bryce Canyon A Stunning</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span className='oclock'> 29TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="news_card">
                        <img src={news8} alt="" />
                        <div className="news_position">
                            <p className='p2 p1-travel'>EVENT & TRAVEL</p>
                            <p className='big-word'>Motorhome Or Trailler</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span className='oclock'> 30TH APRIL, 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="news_card card-9">
                        <img src={news9} alt="" />
                        <div className="news_position">
                            <p className='p1 '>CAMPING</p>
                            <p className='big-word'>Lost Lagos In Portugal</p>
                            <div>
                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                </span>
                                <span className='oclock'> 30TH APRIL, 2019</span>
                            </div>
                        </div>
                        {/* <button>LOAD MORE</button> */}
                    </div>
                     <button>LOAD MORE</button>

                </div>
            </div>
        </>
    )
}

export default News