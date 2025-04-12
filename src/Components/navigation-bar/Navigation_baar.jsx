import React from 'react'
import logo from "../../assets/logo.png"
import "./nav.css"
import { ToggleButton } from './ToggleButton'
import { Profile } from './Profile'
import { usePlan } from '../context/PlanProvider'
import { useUser } from '../context/UserProvider'
import { Link } from 'react-router-dom'


export const Navigation_baar = ({userName}) => {
  const { plan } = usePlan();
  const { user } = useUser();

  return (
    <div className='container'>
        <Link className='logo' to='/'>
            <img src={logo} alt="logo" />
        </Link>
        <ToggleButton />
        <div className='nav-profile'>
          {user ? (
            <Profile userName={user.username} plan={plan} />
          ) : (
            <div className='auth-buttons'>
              <Link to="/login" className='login-btn'>Login</Link>
              <Link to="/signup" className='signup-btn'>Sign Up</Link>
            </div>
          )}
        </div>
    </div>
  )
}

