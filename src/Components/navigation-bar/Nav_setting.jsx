import React from 'react'
import logo from "../../assets/logo.png"
import  {Link, useNavigate} from 'react-router-dom'
import "./nav.css"
import { Profile } from './Profile'
import { usePlan } from '../context/PlanProvider'
import { useUser} from '../context/UserProvider'


export const Nav_setting = () => {
  const navigate = useNavigate();
  const { plan } = usePlan();
  const { user } = useUser();
  return (
    <div className='container'>
        <span id='back' class="material-symbols-outlined" onClick={() => navigate(-1)}>arrow_back_ios</span>
        <Link className='logo' to='/'>
            <img src={logo} alt="logo" />
        </Link>
        <div>
          <Profile userName={user.username} plan={plan}/>
        </div>
    </div>
  )
}