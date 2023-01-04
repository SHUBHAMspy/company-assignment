import React, { useEffect, useState } from 'react'
import './style.css'

const Button = ({color,margin}) => {
  const [isMobile, setIsMobile] = useState(false)
  let style = isMobile 
    ? {
        "borderColor": `${color}`,
        "marginLeft":`${margin}`
      }
    : {
        "borderColor": `${color}`,
        "margin":`${margin}`
      }  
  useEffect(() => {
    window.addEventListener('resize',resize)
  
    return () => {
      window.addEventListener('resize',resize)
    }
  }, [])
  
  let resize = () => {
    if(window.innerWidth === 675) setIsMobile(true)
  }
  return (
    <button 
      className='section-button' 
      style={style}
      >Read More
      <span></span>

    </button>
  )
}

export default Button