import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img  src={props.image}/>
      <h3>{props.name}</h3>
      <p>{props.des}</p>
      <a href='#' className='service-btn'>
        read more
      </a>
    </div>
  )
}

export default Card
