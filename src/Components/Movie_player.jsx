import React, { useState } from "react";
import "./Movie_player.css";

const MoviePlayer = ({ videoId, videoTitle, movieData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Map of video IDs from YouTube URLs matched to movie titles
  const videoMap = {
    // Main featured movie
    "Mickey 17": "osYpGSz_0i4",
    
    // Related movies mapped by title instead of ID
    "The Gorge": "rUSdnuOLebE",
    "The Electric State": "KpN98z8Kf5E", 
    "Elysium": "oIBtePb-dGY",
    "The Adam Project": "IE8HIsIrq4o",
    "Brightburn": "g6eB0JT1DI4", 
    "The Creator": "ex3C1-5Dhb8",
    "Edge of Tomorrow": "vw61gCe2oqI",
    "Chappie": "lyy7y0QOK-0",
    
    // Add trending movies
    "Anora": "tUrU49yU5vI",
    "The Brutalist": "mD7yFyFJ6KE",
    "Captain America: Brave New World": "iqWcuEeKVy0",
    "Last Breath": "d3AqP9R1d4Q",
    "Flow": "bwzH7ceQxQY",
    "Minecraft": "TjBJWYj_5wk",
    "The Life List": "osYpGSz_0i4"
  };

  // Trailer IDs also mapped by title
  const trailerMap = {
    "Mickey 17": "fJLSI4VHsNw",
    "The Gorge": "oYnACzLxbwQ",
    "The Electric State": "5KnlRnWuMiQ",
    "Elysium": "QILNSgou5BY",
    "The Adam Project": "IE8HIsIrq4o",
    "Brightburn": "oVzVdvGIC7U",
    "The Creator": "ex3C1-5Dhb8",
    "Edge of Tomorrow": "yUmSVcttXnI",
    "Chappie": "l6bmTNadhJE"
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Updated getVideoSrc function
  const getVideoSrc = () => {
    const movieTitle = movieData?.title;
    
    if (videoTitle?.includes("Trailer")) {
      // Check trailer map by title
      if (movieTitle && trailerMap[movieTitle]) {
        return `https://www.youtube.com/embed/${trailerMap[movieTitle]}?autoplay=1`;
      }
    } else {
      // Check video map by title
      if (movieTitle && videoMap[movieTitle]) {
        return `https://www.youtube.com/embed/${videoMap[movieTitle]}?autoplay=1`;
      }
    }
    
    // If no match found, use provided videoId or default
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    
    // Fallback
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