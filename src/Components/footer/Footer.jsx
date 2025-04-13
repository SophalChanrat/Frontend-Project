  import React from 'react'
  import logo from "../../assets/Logo.png"
  import { MenuFooter } from './MenuFooter'
  import { SocialApp } from './SocialApp'
  import "./footer.css"

  const Footer = () => {
    return (
      <div className='footer-container'>
          <div className='left-side'>
              <img src={logo} alt="logo" />
              <p>Copyright © 2025 all Rights reserved</p>
          </div>
          <div>
              <MenuFooter />
          </div>
          <div>
              <SocialApp />
          </div>
      </div>
    )
  }

  export default Footer;
