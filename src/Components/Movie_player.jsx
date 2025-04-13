import React, { useState } from "react";
import "./Movie_player.css";

const MoviePlayer = ({ videoId, videoTitle, movieData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Map of video IDs from YouTube URLs matched to movie IDs
  const videoMap = {
    // Main featured movie
    "Mickey 17": "osYpGSz_0i4", // Default/placeholder for Mickey 17
    
    // Related movies in order of IDs
    "1": "rUSdnuOLebE", // The Gorge
    "2": "KpN98z8Kf5E", // The Electric State
    "3": "oIBtePb-dGY", // Elysium
    "4": "IE8HIsIrq4o", // The Adam Project
    "5": "g6eB0JT1DI4", // Brightburn
    "6": "ex3C1-5Dhb8", // The Creator
    "7": "vw61gCe2oqI", // Edge of Tomorrow
    "8": "lyy7y0QOK-0", // Chappie
  };

  // Trailer IDs - in a real app, you'd have these in your movie data
  const trailerMap = {
    "Mickey 17": "fJLSI4VHsNw", // Mickey 17 trailer
    "1": "oYnACzLxbwQ", // The Gorge trailer placeholder
    "2": "5KnlRnWuMiQ", // The Electric State trailer
    "3": "QILNSgou5BY", // Elysium trailer
    "4": "IE8HIsIrq4o", // The Adam Project trailer
    "5": "oVzVdvGIC7U", // Brightburn trailer
    "6": "ex3C1-5Dhb8", // The Creator trailer
    "7": "yUmSVcttXnI", // Edge of Tomorrow trailer 
    "8": "l6bmTNadhJE", // Chappie trailer
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Function to get video source based on movie ID or title
  const getVideoSrc = () => {
    // If it's a trailer request
    if (videoTitle && videoTitle.includes("Trailer")) {
      // Try to find by ID first
      if (movieData && movieData.id && trailerMap[movieData.id]) {
        return `https://www.youtube.com/embed/${trailerMap[movieData.id]}?autoplay=1`;
      }
      // Try to find by title
      else if (movieData && movieData.title && trailerMap[movieData.title]) {
        return `https://www.youtube.com/embed/${trailerMap[movieData.title]}?autoplay=1`;
      }
    } 
    // For full movies
    else {
      // Try to find by ID first
      if (movieData && movieData.id && videoMap[movieData.id]) {
        return `https://www.youtube.com/embed/${videoMap[movieData.id]}?autoplay=1`;
      }
      // Try to find by title
      else if (movieData && movieData.title && videoMap[movieData.title]) {
        return `https://www.youtube.com/embed/${videoMap[movieData.title]}?autoplay=1`;
      }
    }
    
    // If we still don't have a match, use the provided videoId or default
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    
    // Absolute fallback
    return `https://www.youtube.com/embed/osYpGSz_0i4?autoplay=1`;
  };

  return (
    <div className="video-container">
      {!isPlaying ? (
        <>
          <div className="title-overlay">{videoTitle}</div>
          <div 
            className="video-thumbnail" 
            style={{ 
              backgroundImage: `url(${movieData?.thumbnail || movieData?.backgroundImage})` 
            }}
          >
            <div className="custom-controls">
              <button className="play-button" onClick={handlePlay}>&#9658;</button>
            </div>
          </div>
        </>
      ) : (
        <iframe
          className="video-frame"
          src={getVideoSrc()}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MoviePlayer;