import React from 'react'
import HeroImage from "../../assets/images/hero-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import './style.css'
const Hero = () => {
  return (
    <section className='hero hero-img' style={{"--img": `url(${HeroImage})`}}>
      {/* <div className='hero-img' style={{"--img": `url(${HeroImage})`}} > */}
        <div className='hero-content'>
          <div className='social'>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className='hero-info'>
            <span className='company-name'>RAMAERA INDUSTRIES</span>
            <div className='hero-description'>
              <p> An incredible multi-industrial approach oriented towards financial independence, customer focus and serving the best quality to the people.</p>
            </div>
            <button className='hero-button'>Explore Now</button>
          </div>
          <div className='pager'>
            <div className='indicators'>
              <span className='indicator'></span>
              <span className='indicator'></span>
              <span className='indicator'></span>
            </div>
            <div className='page'>02</div>
            
          </div>

        </div>
    </section>
  )
}

export default Hero