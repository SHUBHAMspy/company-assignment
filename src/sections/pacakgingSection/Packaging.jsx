import React from 'react'
import './style.css'
import Packing from "../../assets/images/Packing.png";
import Line from "../../assets/images/line.png";
import Button from '../../components/button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons";
const Packaging = () => {
  return (
    <>
      <section className='packaging-section'>
        <img className='packaging-image' src={Packing} alt="Package" />
        <div className='packaging-content'>
          <div className='packaging-info'>
            <h3 className='packaging-heading'>Packaging industry for business <span>growth</span></h3>
            <div className='packaging-description'>
              <p >
                We provide packaging solutions to help your business flourish
                with boosted outreach. Ensuring the protection, containment,
                and communication of packaged projects is our foremost
                priority.
              </p>
            </div>
            <Button className={'packaging-button'}/>
          </div>
          <span className="packaging-icon">
            <FontAwesomeIcon icon={faBoxOpen} />
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

export default Packaging