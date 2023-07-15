import React from 'react'
import "../css/App.css"
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import AboutUs from '../pages/About/AboutUs'
import Rooms from '../pages/Rooms/Rooms'
import News from '../pages/News/News'
import Contact from '../pages/Contact/Contact'
import DropdownBlog from '../pages/Dropdown/DropdownBlog'
import RoomDetails from '../pages/Dropdown/RoomDropDown/RoomDetails'
function App() {
  return (
    <div className="all">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/aboutus' element={< AboutUs />} />
        <Route path='/rooms' element={< Rooms />} />
        <Route path='/news'  element={< News />}/>
        <Route path='/contact' element={< Contact />} />
        <Route path='/dropdownblog' element={< DropdownBlog />}/>
        <Route path='/roomdetails' element={< RoomDetails />} />
        </Routes>
      <Footer />

    </div>
  )
}

export default App