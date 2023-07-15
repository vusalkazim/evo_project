import React from 'react'
import "../../../src/css/Footer.css"
function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="footer_container">
                    <div className="foot">
                        <div>
                            <h4>SONA</h4>
                            <p>We inspire and reach millions of travelers
                                across 90 local website</p>
                            <div className='foot-icon'>
                                <button>
                                    <i class="fa-brands fa-facebook"></i>
                                </button>
                                <button>
                                    <i class="fa-brands fa-instagram"></i>
                                </button>
                                <button>
                                    <i class="fa-brands fa-telegram"></i>
                                </button>
                                <button>
                                    <i class="fa-brands fa-youtube"></i>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="foot2">
                        <div>
                            <h5>CONTACT US</h5>
                            <p>(12) 345 67890</p>
                            <p>info.colorlib@gmail.com</p>
                            <p>856 Cordia Extension Apt. 356, Lake,</p>
                            <p>United State</p>
                        </div>
                    </div>
                    <div className="foot3">
                        <div className="new">
                            <h5>NEW LATEST</h5>
                            <p>Get the latest updates and offers.</p>
                            <div>
                                <input type="text" placeholder='Email' />
                                <button>
                                    <i class="fa-brands fa-telegram"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_end">
                <div className="footer_end_container">
                    <div className="end">
                        <a href="">Contact</a>
                        <a href="">Terms of use</a>
                        <a href="">Pirvacy</a>
                        <a href="">Enviromental Policy</a>
                    </div>
                    <div className="end1">
                        <p>Copyright ©2023 All rights reserved | This template is made with</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer