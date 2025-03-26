import React, { useState } from 'react'
import './nav.css'

export const ToggleButton = () => {
    const [selected, setSelected] = useState("movie");
    return (
        <div className='toggle-container'>
            <button
                className={`toggle-btn ${selected === "movie" ? "active-movie" : ""}`}
                onClick={() => setSelected("movie")}
            >
                Movies
            </button>
            <button
            
                className={`toggle-btn ${selected === "series" ? "active-movie" : ""}`}
                onClick={() => setSelected("series")}
            >
                Series
            </button>
            <span className="material-symbols-outlined">search</span>
        </div>
    )
}
