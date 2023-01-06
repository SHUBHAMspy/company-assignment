
import './style.css'

const Button = ({className}) => {
  // const [isMobile, setIsMobile] = useState(false)
  // let style = isMobile 
  //   ? {
  //       "borderColor": `${color}`,
  //       "margin":`${margin}`
  //     }
  //   : {
  //       "borderColor": `${color}`,
  //       "marginLeft":`${margin}`
  //     }  
  // useEffect(() => {
  //   window.addEventListener('resize',resize)
  
  //   return () => {
  //     window.addEventListener('resize',resize)
  //   }
  // }, [])
  
  // let resize = () => {
  //   if(window.innerWidth <= 675) setIsMobile(true)
  // }
  return (
    <button 
      className={className}
      // style={style}
      >Read More
      <span></span>

    </button>
  )
}

export default Button