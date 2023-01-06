import React from 'react'
import './style.css'
import Polygon from "../../assets/images/big_polygon.png";

const Goal = React.forwardRef((props,ref) => {
  return (
    <section className='goal' ref={ref}>
      <img className="polygon" src={Polygon} alt='a polygon'/>
      <div className='goal-content'>
        <h2 className='goal-heading'>THE RAMAERA EXPANSION</h2>
        <p className='goal-description'>We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.</p>
      </div>
    </section>
  )
})

export default Goal