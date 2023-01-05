import React from 'react'
import CompanyLogo from "../../assets/images/ramaera-logo.png";
import './style.css'

const Logo = () => {
  return (
    <>
      <img className='logo' src={CompanyLogo} alt="ramaera-logo"  />
    </>
  )
}

export default Logo