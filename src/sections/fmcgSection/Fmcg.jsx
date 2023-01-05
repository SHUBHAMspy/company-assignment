import React from 'react'
import './style.css'
import Line from "../../assets/images/line.png";
import Button from '../../components/button/Button';
import fmcgImage from "../../assets/images/Fmcg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const Fmcg = () => {
  return (
    <>
      <img
        src={Line}
        className="line-img"
        alt="a line"
      />
      <section className='fmcg-section'>
        <div className='fmcg-content'>
          <span className="fmcg-icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <div className='fmcg-info'>
            <h3 className='fmcg-heading'>Offering the best with <span> FMCG </span> industry</h3>
            <p className='fmcg-description'>
              Ramaera FMCG industry has commenced an extensive range of FMCG
              to make your days more than ordinary. We plan to offer you
              nothing less than the best.
            </p>
            <Button className={'fmcg-button'}/>
          </div>
        </div>
        <img className='fmcg-image' src={fmcgImage} alt="fmcg"/>
      </section>
      <img
        src={Line}
        className="line-img"
        alt="a line"
      />
    </>
  )
}

export default Fmcg