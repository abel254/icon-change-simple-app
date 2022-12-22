import React from 'react'
import {IconContext} from 'react-icons'

type ConfigIconProp = {
  children: React.ReactNode
}

export default function ConfigIcon({children}: ConfigIconProp){
  return(
    <>
    <IconContext.Provider value= {{color: '#fff', size: '7em'}}>
      {children}
    </IconContext.Provider>
    </>
  )
}