import React from 'react'
import './style.css'
import Line from "../../assets/images/line.png";
import Button from '../../components/button/Button';
import Ecommerce from "../../assets/images/ecommerce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

const OnlineMart = () => {
  return (
    <>
      <img
        src={Line}
        className="line-img"
        alt="a line"
      />
      <section className='onlinemart-section'>
        <div className='onlinemart-content'>
          <span className="onlinemart-icon">
            <FontAwesomeIcon icon={faHouse} />
          </span>
          <div className='onlinemart-info'>
            <h3 className='onlinemart-heading'>Get all your essentials in <span> one place</span></h3>
            <p className='onlinemart-description'>
              Ramaera Supermart is an online customer oriented marketplace to
              motivated to provide everything you need right at one place
              under the comfort of your homes.
            </p>
            <Button className={'onlinemart-button'}/>
          </div>
        </div>
        <img className='onlinemart-image' src={Ecommerce} alt="online market place"/>
      </section>
      <img
        src={Line}
        className="line-img"
        alt="a line"
      />
    </>
  )
}
export default OnlineMart