import React from 'react'
import "./DropdownBlog.scss"
import blogBG from "../../components/img/Blogdropdown-bg.jpg"
import details1 from "../../components/img/event-2.jpg"
import details2 from "../../components/img/blog-details-2.jpg"
import details3 from "../../components/img/blog-details-3.jpg"
import details4 from "../../components/img/event-1.jpg"
import details5 from "../../components/img/event-3.jpg"

function DropdownBlog() {
    return (
        <>
            <div className='camping'>
                <img src={blogBG} alt="" />
                <div className="camping_item">
                    <span>TRAVEL TRIP & CAMPING</span>
                    <h1>Cdc Issues Health Alert Notice For Travelers To Usa From Hon</h1>
                    <div className="kerry">
                        <div>
                            <i class="fa-regular fa-clock"></i>
                            <p>15TH APRIL, 2019</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <p>Kerry Jones</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="camping_informations">
                <div className="camping_informations_content">
                    <p>
                        Thinking about overseas adventure travel? Have you put any thought into the best places to go when it comes to overseas adventure travel? Nepal is one of the most popular places of all, when you visit this magical country you will have the best adventures right there at your doorstep. Only overseas adventure travel in Nepal will give you these kinds of opportunities so if this is not on your list of possible places to visit yet then now is the time to put it on there!

                        In Nepal your overseas adventure travel is going to be fascinating. You will get to see the Himalayan Mountains and experience all that the rich Nepalese culture has to offer. They are an amazing people who have managed to hang on to their own culture and beliefs longer than most other countries. When overseas adventure travel takes you to Nepal you will have the chance to see all of the fantastic and one of a kind lakes and forests and you can even spend days or weeks camping out in their forests with a specialized guide. And the waterfalls in Nepal are to die for, you will never see anything more gorgeous in your life as their waterfalls! This should be at the top of your overseas adventure travel destination list for sure!
                    </p>
                </div>
                <div className="camping_detals">
                    <div>
                        <img src={details1} alt="" />
                    </div>
                    <div>
                        <img src={details2} alt="" />
                    </div>
                    <div>
                        <img src={details3} alt="" />
                    </div>
                </div>
            </div>
            <div className="city">
                <div className="city_word">
                    <div>
                        <h3>If you live in New York City</h3>
                        <p>You know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their unformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go</p>
                    </div>
                    <div>
                        <h3>Every time I hail a cab in New York City</h3>
                        <p>I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense.</p>
                    </div>
                </div>
            </div>
            <div className='recommended'>
            <h1>Recommended</h1>
            </div>
           <div className="blog_details">
                <div>
                    <img src={details4} alt="" />
                    <div className="recommed_word word1">
                        <span>TRAVEL TRIP</span>
                        <p className='bigp'>Tremblant In Canada</p>
                        <div>
                            <p>
                            <i class="fa-regular fa-clock"></i>
                            </p>
                        <p>15TH APRIL, 2019</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={details1} alt="" />
                    <div className="recommed_word word2">
                        <span>CAMPING</span>
                        <p className='bigp'>Chossing a Static Caravan</p>
                        <div>
                            <p>
                            <i class="fa-regular fa-clock"></i>
                            </p>
                        <p>15TH APRIL, 2019</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={details5} alt="" />
                    <div className="recommed_word word3">
                        <span>EVENT</span>
                        <p className='bigp'>Copper Canyon</p>
                        <div>
                            <p>
                            <i class="fa-regular fa-clock"></i>
                            </p>
                        <p>21TH APRIL, 2019</p>
                        </div>
                    </div>
                </div>
           </div>

        </>
    )
}

export default DropdownBlog