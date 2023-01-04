import React from 'react'
import "./style.css";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <span className='item'>HOME</span>
        <span className='item'>OUR INDUSTRIES</span>
        <span className='item'>OUR COMPANIES</span>
      </div>

      <div className='right'>
        <span>Career</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default Navbar