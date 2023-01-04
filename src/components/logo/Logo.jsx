import React from 'react'
import CompanyLogo from "../../assets/images/ramaera-logo.png";
import './style.css'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={CompanyLogo} alt="ramaera-logo" height="100" width="100"/>
    </div>
  )
}

export default Logo