import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

export const MenuFooter = () => {
  return (
    <div className='menu-footer'>
        <ul>
            <li><Link to="/">Trending</Link></li>
            <li><Link to="/action">Action</Link></li>
            <li><Link to="/romance">Romance</Link></li>
            <li><Link to="/animation">Animation</Link></li>
            <li><Link to="/horror">Horror</Link></li>
            <li><Link to="/anime">Anime</Link></li>
        </ul>
    </div>
  )
}
