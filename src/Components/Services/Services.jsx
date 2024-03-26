import React from 'react'
import "./Services.css"
import Card from './Card';
import data from "./data";
const Services = () => {

  const card = data.map((item)=>{
    return <Card image={item.img} name={item.name} des={item.des}/>
  });
  return (
    <>
    <div className="heading">
    <h6>What We Offers</h6>
      <h1>Our <span style={{ color: '#00aaff' }}>Services</span></h1>
      <p>Our commitment to quality and excellence is unparalleled. We have a team of seasoned professionals who are passionate about what they do and always go the extra mile to exceed customer expectations. From the first brainstorming session to the final product delivery, we ensure that every step of the process is executed to perfection.</p>
    </div>
    <div className="service-container">
    <div className="wrapper">
      {card}
    </div>
    </div>
    </>
  )
}

export default Services
