  import React from 'react'
  import logo from "../../assets/Logo.png"
  import { MenuFooter } from './MenuFooter'
  import { SocialApp } from './SocialApp'
  import "./footer.css"
  import { Link } from 'react-router-dom'

  export const Footer = () => {
    return (
      <div className='footer-container'>
          <Link className='left-side' to="/">
              <img src={logo} alt="logo" />
              <p>Copyright © 2025 all Rights reserved</p>
          </Link>
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
