import React from 'react'
import './style.css'
import Tech from "../../assets/images/Tech.png";
import Line from "../../assets/images/line.png";
import Button from '../../components/button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCubes} from "@fortawesome/free-solid-svg-icons";

const Technology = () => {
  return (
    <>
      <img
        src={Line}
        className="line-img"
        alt="a line"
      />
      <section className='technology-section'>
        <img className='technology-image' src={Tech} alt="Man using tech" />
        <div className='technology-content'>
          <div className='tech-info'>
            <h3 className='technology-heading'>Unleashing the strength of <span>Technology</span></h3>
            <div className='technology-description'>
              <p >
                We believe in innovation and excellence hence , our approach
                in the field of technology is focused to relish incredible
                customer experience and stabilising business models for
                tomorrow.
              </p>
            </div>
            <Button className={'technology-button'} />
          </div>
          <span className="icon">
            <FontAwesomeIcon icon={faCubes} />
          </span>
        </div>
      </section>
      <img
        src={Line}
        className="line-img"
        alt="a line"
      />
    </>
  )
}

export default Technology