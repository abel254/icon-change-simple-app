import { useState } from 'react'
import { GrApple } from 'react-icons/gr'
import {FcGoogle } from 'react-icons/fc'
import ConfigIcon from '../ConfigIcon'


export const ChangeIcon = () => {
  const [icon, setIcon] = useState('apple')

  const switchIcon = (state: string) => {
    if(state === 'apple'){
      return 'google'
    }
    return 'apple'
  }

  return(
    <div className="icons-container">
      <h1>Switch Between <span>Apple</span> or <span>G</span><span>o</span><span>og</span><span>le</span></h1>
      { <div className="image">
        {icon === 'apple' ?<ConfigIcon><GrApple/></ConfigIcon> : <ConfigIcon><FcGoogle/></ConfigIcon>}
      </div>}
      <button className="change" onClick={()=>setIcon((logo)=>switchIcon(logo))}>Switch</button> 
    </div>
  )
}