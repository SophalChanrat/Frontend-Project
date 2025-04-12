import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Nav_setting} from '../Components/navigation-bar/Nav_setting'
import { Footer } from '../Components/footer/Footer'
import { Setting_pf} from '../Components/setting/Setting_pf'
import { Setting_btn} from '../Components/setting/setting_btn'
import { Change_info_popup } from '../Components/setting/Change_info_popup'
import { useUser } from '../Components/context/UserProvider.jsx'
import { useNavigate } from 'react-router-dom';
import { TbBackground } from 'react-icons/tb';

export const Setting = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { user, logoutUser } = useUser();
  const navigate = useNavigate();
  return (
    <div>
        <Nav_setting />
        <div className="setting_body">
          <Setting_pf userName={user.username}/>
          <Setting_btn name={"Change information"} onClick={() => setShowPopup(true)}/>
          <Change_info_popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
          <Link to="/plan" style={{width: "100%", display: 'flex', justifyContent: 'center' }}>
            <button className='setting_btn_container'>
              Change Plan
              <span class="material-symbols-outlined">open_in_new</span>
            </button>
          </Link>
          <Link to="/watchlist" style={{width: "100%", display: 'flex', justifyContent: 'center' }}>
            <button className='setting_btn_container'>
              Watch List
              <span class="material-symbols-outlined">open_in_new</span>
            </button>
          </Link>
          
          <Setting_btn name={"Logout"} onClick={() => {logoutUser(); navigate("/");}} style={{ backgroundColor: 'red'}}/>
        </div>
        <Footer />
    </div>
  )
}
export default Setting;
