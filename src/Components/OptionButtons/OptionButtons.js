import React,{useState} from 'react'
import './optionbutton.css'

const OptionButtons = ({icon,title}) => {
  const [active,setActive] = useState(false)
  return (
    <div className='button-container'>
        <img className='button-icon' src={icon} alt=''/>
        <button style={{fontWeight: active ? "bold" : 400}} onClick={()=>setActive(!active)} className='button-title'>{title}</button>
    </div>
  )
}

export default OptionButtons