import React from 'react'
// import "../../../src/css/Room.css"
import './Room.scss'
import room1 from "../img/room-b1.jpg"
import room2 from "../img/room-b2.jpg"
import room3 from "../img/room-b3.jpg"
import room4 from "../img/room-b4.jpg"
function Room() {
    return (
        <>
            <div className="room">
                <div className="room_content room1">
                    <img src={room1} alt="err" />
                    <div className="hover_content ">
                        <h3>DOUBLE ROOM</h3>
                        <div className="hoverContainer">
                            <span className='dollar'>199$</span>
                            <span className='pernigh'>/Pernigh</span>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Size:</span>
                            </div>
                            <div className='s'>
                                <span >30 ft</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Capacity:</span>
                            </div>
                            <div className='s'>
                                <span >	Max persion 5</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Bed:</span>
                            </div>
                            <div className='s'>
                                <span >Wifi,Televizion,</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Services</span>
                            </div>
                            <div className='s'>
                                <span>Bathroom</span>
                            </div>
                        </div>
                        <button>More Details</button>
                    </div>
                </div>
                <div className="room_content room2">
                    <img src={room2} alt="" />
                    <div className="hover_content content2">
                        <h3>Premium King Room</h3>
                        <div className="hoverContainer">
                            <span className='dollar'>159$</span>
                            <span className='pernigh'>/Pernigh</span>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Size:</span>
                            </div>
                            <div className='s'>
                                <span >30 ft</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Capacity:</span>
                            </div>
                            <div className='s'>
                                <span >	Max persion 5</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Bed:</span>
                            </div>
                            <div className='s'>
                                <span >Wifi,Televizion,</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Services</span>
                            </div>
                            <div className='s'>
                                <span>Bathroom</span>
                            </div>
                        </div>
                        <button>More Details</button>
                    </div>
                </div>
                <div className="room_content room3">
                    <img src={room3} alt="" />
                    <div className="hover_content">
                        <h3>Deluxe Room</h3>
                        <div className="hoverContainer">

                            <span className='dollar'>198$</span>
                            <span className='pernigh'>/Pernigh</span>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Size:</span>
                            </div>
                            <div className='s'>
                                <span >30 ft</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Capacity:</span>
                            </div>
                            <div className='s'>
                                <span >	Max persion 5</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Bed:</span>
                            </div>
                            <div className='s'>
                                <span >Wifi,Televizion,</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Services</span>
                            </div>
                            <div className='s'>
                                <span>Bathroom</span>
                            </div>
                        </div>
                        <button>More Details</button>
                    </div>
                </div >
                <div className="room_content room4">
                    <img src={room4} alt="" />
                    <div className="hover_content">
                        <h3>Family Room</h3>
                        <div className="hoverContainer">

                            <span className='dollar'>299$</span>
                            <span className='pernigh'>/Pernigh</span>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Size:</span>
                            </div>
                            <div className='s'>
                                <span >30 ft</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Capacity:</span>
                            </div>
                            <div className='s'>
                                <span >	Max persion 5</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Bed:</span>
                            </div>
                            <div className='s'>
                                <span >Wifi,Televizion,</span>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='s'>
                                <span>Services</span>
                            </div>
                            <div className='s'>
                                <span>Bathroom</span>
                            </div>
                        </div>
                        <button>More Details</button>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Room