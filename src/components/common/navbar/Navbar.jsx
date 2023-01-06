import React, { useState } from 'react'
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faBars, faXmark, faChevronDown,} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isActive, setisActive] = useState(true);
  const handleClick = () => {
    setisActive(true)
  }

  return (
    <>  
        <nav className={isNavExpanded ? 'navbar-expanded': 'navbar'}>
          <ul className='left'>
            <li className={isActive ?'active':'item' }onClick={handleClick}><a href="#home">HOME</a></li>
            <li className='item'  onClick={handleClick}>
              <a href="#industries">
                OUR INDUSTRIES 
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="arrowDown__icon"
                />
              </a>
            </li>
            <li className='item' onClick={handleClick}>
              <a href="#companies">
                OUR COMPANIES
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="arrowDown__icon"
                />
              </a>
            </li>
          </ul>

          <ul className='right'>
            <li className='item'> <a href="#career">Career</a></li>
            <li className='item'><a href="#contact">Contact</a></li>
            <li>
              <a href="#search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search item"
                />
              </a>
            </li>
          </ul>
        </nav>
        {

          isNavExpanded 
          ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="hamburger"
                style={{"width": "14px"}}
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              />
            )
          : (
            <FontAwesomeIcon
                icon={faBars}
                className="hamburger"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
            />
          )  
        }
    </>
  )
}

export default Navbar