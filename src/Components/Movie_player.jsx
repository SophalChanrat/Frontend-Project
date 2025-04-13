import React, { useState } from "react";
import "./Movie_player.css";

const MoviePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "osYpGSz_0i4";
  const videoTitle = "Mickey 17 Trailer";

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-container">
      {!isPlaying ? (
        <>
          <div className="title-overlay">
            {videoTitle}
          </div>
          <div className="custom-controls">
            <button className="play" onClick={handlePlay}>&#9658;</button>
          </div>
        </>
      ) : (
        <iframe
          className="video-frame"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MoviePlayer;
