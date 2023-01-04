import React from 'react'
import './style.css'
import Line from "../../assets/images/line.png";
import Button from '../../components/button/Button';
import agriImage from "../../assets/images/Agri.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";

const Agri = () => {
  return (
    <>
      <img
        src={Line}
        className="line-img"
        alt="a line"
      />
      <section className='agriculture-section'>
        <img className='agriculture-image' src={agriImage} alt="Man using tech" />
        <div className='agriculture-content'>
          <div className='agriculture-info'>
            <h3 className='agriculture-heading'>Agri-business to bestow <span>Nature's Love</span></h3>
            <div className='agriculture-description'>
              <p >
                Our Agri-business industry is established to get you fresh and
                organic fruits and vegetables with the blessed with the touch
                of nature
              </p>
            </div>
            <Button color={'#579181'} margin={'auto'}/>
          </div>
          <span className="agri-icon">
            <FontAwesomeIcon icon={faLeaf} />
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

export default Agri