import React from 'react'
import pic from "../../assets/logo/react.svg"
import { Link } from 'react-router-dom'

export const Profile = ({userName, plan}) => {
  return (
    <Link to="/setting">
      <div className='container-profile'>
          <div className="pic-profile">
              <img src={pic} alt="pic_profile" />
          </div>
          <div className="detail">
              <p>{userName}</p>
              <p>{plan}</p>
          </div>
          <span></span>
      </div>
    </Link>
  )
}
