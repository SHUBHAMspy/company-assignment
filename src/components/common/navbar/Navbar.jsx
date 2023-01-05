import React, { useState } from 'react'
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faBars, faXmark, faChevronDown,} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>  
        
        <nav className={isNavExpanded ? 'navbar-expanded': 'navbar'}>
          <ul className='left'>
            <li className='item'>HOME</li>
            <li className='item'>
              OUR INDUSTRIES 
              <FontAwesomeIcon
                icon={faChevronDown}
                className="arrowDown__icon"
              />
            </li>
            <li className='item'>
              OUR COMPANIES
              <FontAwesomeIcon
                icon={faChevronDown}
                className="arrowDown__icon"
              />
            </li>
          </ul>

          <ul className='right'>
            <li className='item'>Career</li>
            <li className='item'>Contact</li>
            <li>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search item"
              />
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