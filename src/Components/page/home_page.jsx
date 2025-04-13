import Footer from "../footer/Footer.jsx"; // Fixed path
import React, { useEffect, useState } from "react";
import "./home_page.css";
import MoviePlayer from "../Movie_player.jsx"; // Fixed path
import { movieDetails } from "../../data/moviedata.js"; // Fixed path
import { Movie_row } from "../Movie_row.jsx"; // Fixed path

function HomePage() {
    const [featuredMovie, setFeaturedMovie] = useState(movieDetails[0]); // Set the first movie as the featured one
    
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * movieDetails.length);
        setFeaturedMovie(movieDetails[randomIndex]);
    }, []);
    
    return (
        <div className="home-page">
        <div className="featured-movie">
            <MoviePlayer movie={featuredMovie} /> {/* Pass the featured movie to the player */}
            <div className="overlay"></div>


        </div>
        <div className="movie-rows">
            
        </div>
        <Footer />
        </div>
    );
}

export default HomePage;