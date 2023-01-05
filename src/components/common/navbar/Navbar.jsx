import React from 'react'
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='left'>
        <li className='item'>HOME</li>
        <li className='item'>OUR INDUSTRIES</li>
        <li className='item'>OUR COMPANIES</li>
      </ul>

      <ul className='right'>
        <li>Career</li>
        <li>Contact</li>
        <li>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search"
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar