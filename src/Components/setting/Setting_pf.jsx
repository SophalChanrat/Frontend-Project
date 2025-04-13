import React from 'react'
import profile from "../../assets/logo/react.svg"
import "./setting.css"

export const Setting_pf = ({userName}) => {
  return (
    <div className='setting_pf_container'>
        <div className="profile-top">
            <div className="pf_pic">
                <img src={profile} alt="profile" />
            </div>
            <span class="material-symbols-outlined">border_color</span>
        </div>
        
        <div className="pf_detail">
            <p>{userName}</p>
        </div>

    </div>
  )
}
