import React from 'react'
import logo from "../../assets/logo.png"
import  {useNavigate} from 'react-router-dom'
import "./nav.css"
import { Profile } from './Profile'
import { usePlan } from '../plan/PlanProvider'


export const Nav_setting = () => {
  const navigate = useNavigate();
  const { plan } = usePlan();
  return (
    <div className='container'>
        <span class="material-symbols-outlined" onClick={() => navigate(-1)}>arrow_back_ios</span>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div>
          <Profile userName={"John Doe"} plan={plan}/>
        </div>
    </div>
  )
}