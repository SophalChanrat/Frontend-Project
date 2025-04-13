import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './nav.css'
import { useUser } from '../context/UserProvider'

export const ToggleButton = () => {
    const { mediaType, toggleMediaType } = useUser();
    const location = useLocation();
    const navigate = useNavigate();

    const handleToggle = (type) => {
        toggleMediaType(type);
        
        // Handle category paths
        if (location.pathname === '/' || location.pathname === '/series') {
            // Handle home page toggle
            navigate(type === 'series' ? '/series' : '/');
        } else if (location.pathname.includes('/action')) {
            navigate(type === 'series' ? '/action/series' : '/action');
        } else if (location.pathname.includes('/romance')) {
            navigate(type === 'series' ? '/romance/series' : '/romance');
        } else if (location.pathname.includes('/animation')) {
            navigate(type === 'series' ? '/animation/series' : '/animation');
        } else if (location.pathname.includes('/horror')) {
            navigate(type === 'series' ? '/horror/series' : '/horror');
        } else if (location.pathname.includes('/anime')) {
            navigate(type === 'series' ? '/anime/series' : '/anime');
        }
    };

    return (
        <div className='toggle-container'>
            <button
                className={`toggle-btn ${mediaType === "movie" ? "active-movie" : ""}`}
                onClick={() => handleToggle("movie")}
            >
                Movies
            </button>
            <button
                className={`toggle-btn ${mediaType === "series" ? "active-movie" : ""}`}
                onClick={() => handleToggle("series")}
            >
                Series
            </button>
            <span className="material-symbols-outlined">search</span>
        </div>
    )
}
