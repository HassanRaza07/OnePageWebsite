import React from 'react'
import "./Header.css"
import image from "../images/logo.png";

const Header = () => {
  return (
    <div className="container">
        <div className="logo">
            <img src={image} alt="" />
        </div>
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="book">
            <button className='book-btn'>Book A Meeting</button>
        </div>
    </div>
  )
}

export default Header
