import React from 'react'
import logo from "../../assets/logo.png"
import "./nav.css"
import { ToggleButton } from './ToggleButton'
import { Profile } from './Profile'
import { usePlan } from '../plan/PlanProvider'


export const Navigation_baar = ({userName}) => {
  const { plan } = usePlan();
  return (
    <div className='container'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <ToggleButton />
        <div>
          <Profile userName={"John Doe"} plan={plan}/>
        </div>
    </div>
  )
}
