import React from 'react'
import pic from "../../assets/react.svg"

export const Profile = ({userName, plan}) => {
  return (
    <div className='container-profile'>
        <div className="pic-profile">
            <img src={pic} alt="pic_profile" />
        </div>
        <div className="detail">
            <p>{userName}</p>
            <p>{plan}</p>
        </div>
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
    </div>
  )
}
