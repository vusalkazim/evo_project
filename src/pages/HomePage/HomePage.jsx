import './HomePage.scss'

import Swiper from '../../components/Swiper/Swiper'
import About from '../../components/About/About'
import Service from '../../components/Servicess/Service'
import Room from '../../components/Room/Room'
import Advisor from '../../components/Advisor/Advisor'
import Blog from '../../components/Blog/Blog'
const HomePage = () => {
    return (
        <div className='homePage'>
            <Swiper />
            <About />
            <Service />
            <Room />
            <Advisor />
            <Blog />
        </div>
    )
}

export default HomePage