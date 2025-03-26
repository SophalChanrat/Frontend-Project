import React from 'react'
import logo from "../../assets/logo.png"
import "./nav.css"
import { ToggleButton } from './ToggleButton'
import { Profile } from './Profile'


export const Navigation_baar = () => {
  return (
    <div className='container'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div>
            <ToggleButton />

        </div>
        <div>
          <Profile userName={"John Doe"} plan={"Premium"}/>
        </div>
    </div>
  )
}
