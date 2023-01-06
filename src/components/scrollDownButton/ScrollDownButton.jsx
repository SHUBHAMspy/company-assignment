import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './style.css'

const ScrollDownButton = ({handleClick}) => {
  
  return (
    <>
      <FontAwesomeIcon
      onClick={handleClick}
        icon={faArrowDownLong}
        className= 'scroll-arrow'
        />
    </>
  )
}

export default ScrollDownButton