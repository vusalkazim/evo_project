import React from 'react'
import "./Contact.scss"
function Contact() {
    return (
        <>
            <div className="contact">
                <div className="contact_left">
                    <div className="info">
                        <h1>Contact Info</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="address">
                        <div className="address1">
                            <span>Address:</span>
                        </div>
                        <div className="address2">
                            <p>	856 Cordia Extension Apt. 356, Lake, US</p>
                        </div>
                    </div>
                    <div className="address">
                        <div className="address1">
                            <span>Phone:</span>
                        </div>
                        <div className="address2">
                            <p>(12) 345 67890</p>
                        </div>
                    </div>
                    <div className="address">
                        <div className="address1">
                            <span>Email:</span>
                        </div>
                        <div className="address2">
                            <p>info.colorlib@gmail.com</p>
                        </div>
                    </div>
                    <div className="address">
                        <div className="address1">
                            <span>Fax:</span>
                        </div>
                        <div className="address2">
                            <p>	+(12) 345 67890</p>
                        </div>
                    </div>
                </div>
                <div className="contact_right">
                    <div className="form_contact">
                        <div className="form_contact_top">
                            <input className='name' type="text" placeholder='Your Name' />
                            <input className='name' type="text" placeholder='Your Email' />
                        </div>
                        <div className="form_contact_bottom">
                            <input className='message' type="text" placeholder='Your Message' />
                        </div>
                        <div className='contact_button'>
                            <button>SUBMIT NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact