import React from 'react'
import HeroImage from "../../assets/images/hero-image.jpg";
import './style.css'
const Hero = () => {
  return (
    <section className='hero hero-img' style={{"--img": `url(${HeroImage})`}}>
      {/* <div className='hero-img' style={{"--img": `url(${HeroImage})`}} > */}
        <div className='hero-content'>
          <span className='company-name'>RAMAERA INDUSTRIES</span>
          <div className='hero-description'>
            <p> An incredible multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.</p>
          </div>
          <button className='hero-button'>Explore Now</button>
        </div>
      
    </section>
  )
}

export default Hero