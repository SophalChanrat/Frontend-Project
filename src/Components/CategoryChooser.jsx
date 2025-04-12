import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import action from '../assets/action.svg'
import animation from '../assets/animation.svg'
import romance from '../assets/romance.svg'
import horror from '../assets/horror.svg'
import anime from '../assets/anime.svg'
import trending from '../assets/trending.svg'

export const CategoryChooser = () => {
    const [activeCategory, setActiveCategory] = useState('Trending')

    const categories = [
        { name: 'Trending', icon: trending , location: '/trending'},
        { name: 'Action', icon: action, location: '/action'},
        { name: 'Romance', icon: romance, location: '/romance'},
        { name: 'Animation', icon: animation, location: '/animation'},
        { name: 'Horror', icon: horror, location: '/horror'},
        { name: 'Anime', icon: anime, location: '/anime'},
    ]

    const handleActive = (categoryName) => {
        setActiveCategory(categoryName)
    }

    return (
        <div className="category-list">
            {categories.map(({ name, icon, location }) => (
                <Link
                    key={name}
                    to={location}
                    className={`category-button ${activeCategory === name ? 'active' : ''}`}
                    onClick={() => handleActive(name)}
                >
                    <img src={icon} alt={name.toLowerCase()} />
                    {name}
                </Link>
            ))}
        </div>
    )
}
