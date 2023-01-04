import React from 'react'
import './style.css'
import Polygon from "../../assets/images/big_polygon.png";

const Goal = () => {
  return (
    <section className='goal'>
      <img className="polygon" src={Polygon}/>
      <div className='goal-content'>
        <h2 className='goal-heading'>THE RAMAERA EXPANSION</h2>
        <p className='goal-description'>We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.</p>
      </div>
    </section>
  )
}

export default Goal