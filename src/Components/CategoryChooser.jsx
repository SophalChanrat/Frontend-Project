import React, { useState, useEffect, useMemo } from 'react'
import '../App.css'
import { Link, useLocation } from 'react-router-dom'
import { useUser } from './context/UserProvider'
import action from '../assets/logo/action.svg'
import animation from '../assets/logo/animation.svg'
import romance from '../assets/logo/romance.svg'
import horror from '../assets/logo/horror.svg'
import anime from '../assets/logo/anime.svg'
import trending from '../assets/logo/trending.svg'

export const CategoryChooser = () => {
    const location = useLocation();
    const { mediaType } = useUser();

    const categories = useMemo(() => [
        { 
            name: 'Trending', 
            icon: trending, 
            location: mediaType === 'series' ? '/series' : '/'
        },
        { 
            name: 'Action', 
            icon: action, 
            location: mediaType === 'series' ? '/action/series' : '/action'
        },
        { 
            name: 'Romance', 
            icon: romance, 
            location: mediaType === 'series' ? '/romance/series' : '/romance'
        },
        { 
            name: 'Animation',
            icon: animation,
            location: mediaType === 'series' ? '/animation/series' : '/animation'
        },
        { 
            name: 'Horror', 
            icon: horror, 
            location: mediaType === 'series' ? '/horror/series' : '/horror'
        },
        { 
            name: 'Anime', 
            icon: anime, 
            location: mediaType === 'series' ? '/anime/series' : '/anime'
        }
    ], [mediaType]);

    const currentCategory = useMemo(() => {
        const found = categories.find(c => c.location === location.pathname);
        return found ? found.name : 'Trending'; // fallback to Trending
    }, [location.pathname, categories]);

    return (
        <div className="category-list">
            {categories.map(({ name, icon, location }) => (
                <Link
                    key={name}
                    to={location}
                    className={`category-button ${currentCategory === name ? 'active' : ''}`}
                >
                    <img src={icon} alt={name.toLowerCase()} />
                    {name}
                </Link>
            ))}
        </div>
    )
}
