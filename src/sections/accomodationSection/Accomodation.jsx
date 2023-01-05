import React from 'react'
import './style.css'
import Line from "../../assets/images/line.png";
import Button from '../../components/button/Button';
import AccomodationImage from "../../assets/images/accomodation.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed} from "@fortawesome/free-solid-svg-icons";

const Accomodation = () => {
  return (
    <>
      <img
        src={Line}
        className="line-img"
        alt="a line"
      />
      <section className='accomodation-section'>
        <div className='accomodation-content'>
          <span className="accomodation-icon">
            <FontAwesomeIcon icon={faBed} />
          </span>
          <div className='accomodation-info'>
            <h3 className='accomodation-heading'>Making <span> accommodations </span> easier</h3>
            <p className='accomodation-description'>
              Introducing capsule hotels in places of extreme need such as
              examination centres and hospitals to provide comfortable and
              convenient accommodation at pocket friendly prices.
            </p>
            <Button className={'accomodation-button'}/>
          </div>
        </div>
        <img className='accomodation-image' src={AccomodationImage} alt="hotel accomodation"/>
      </section>
      <img
        src={Line}
        className="line-img"
        alt="a line"
      />
    </>
  )
}

export default Accomodation