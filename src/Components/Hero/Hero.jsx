import React from 'react'
import "./Hero.css"
import hero from "../images/hero.jpg"
const Hero = () => {
  return (
     <div>
      <div  className='hero-container'  style={{ backgroundImage: `url(${hero})`,
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat",
      height:"90vh",
      width: "100%",
      opacity: ".85",
     
      }}>
        <div className="centered">
        <div className="hero-text">
          <h1>Comprehensive <br></br>Digital Solutions <br></br>Under One Roof.</h1>
          <p>Navigate the future of your business with our expert-guided digital services. Join the forward thinkers and innovators by leveraging the power of digital technology.</p>
          
            <button className="hero-btn">Learn More
            </button>
          
        
        </div>
        </div>
       
        
        </div>
      </div>
   
  )
}

export default Hero
