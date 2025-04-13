import React from 'react'
import "./setting.css"

export const Setting_btn = ({name, onClick}) => {
  return (
    <button className='setting_btn_container' onClick={onClick}>
        {name}
        <span class="material-symbols-outlined">open_in_new</span>
    </button>
  )
}
