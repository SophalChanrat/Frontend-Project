import React, { useState } from "react";
import "./Series_player.css";
import { relatedSeriesData } from "../data/seriesdata.js";

const SeriesPlayer = ({ 
  seriesId, 
  seasonNumber, 
  episodeId, 
  episodeTitle, 
  seriesData,
  onClose 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Get the current series information from either seriesData or relatedSeriesData
  const getCurrentSeriesData = () => {
    // First check in seriesData
    if (seriesData[seriesId]) {
      return seriesData[seriesId];
    }
    
    // Then check in relatedSeriesData
    const relatedSeries = relatedSeriesData.find(series => series.id === seriesId);
    if (relatedSeries) {
      return relatedSeries;
    }
    
    // Fallback to invincible
    return seriesData["invincible"];
  };
  
  const currentSeries = getCurrentSeriesData();
  
  // Find the specific episode data
  const currentSeason = seasonNumber || 1;
  const episodes = currentSeries?.episodesBySeason?.[currentSeason] || [];
  const currentEpisode = episodeId 
    ? episodes.find(ep => ep.id === episodeId) 
    : episodes[0];

  // Map of video IDs from YouTube URLs matched to series and episode IDs
  const videoMap = {
    // Invincible - Season 1
    "invincible_s1_e1": "TqxXVNejouM", // S1E1
    "invincible_s1_e2": "QvAp9vkAIKY", // S1E2
    "invincible_s1_e3": "hkb0DzLDEMw", // S1E3
    "invincible_s1_e4": "hkb0DzLDEMw", // S1E4
    "invincible_s1_e5": "uykT_rA4TcA", // S1E5
  
    // Invincible - Season 2
    "invincible_s2_e1": "rvGaxXFeQtw", // S2E1
    "invincible_s2_e2": "XwzjqbSxdaA", // S2E2
    "invincible_s2_e3": "_xfg7Y8YKps", // S2E3
    "invincible_s2_e4": "vjDOpHuUppU", // S2E4
  
    // Invincible - Season 3
    "invincible_s3_e1": "KZZeItIBtk4", // S3E1
    "invincible_s3_e2": "a3I8grFbd5U", // S3E2
    "invincible_s3_e3": "ViL8rIbSWQg", // S3E3
    "invincible_s3_e4": "QtboCS9BvtA", // S3E4
    
    // Arcane - Season 1
    "arcane_s1_e1": "fXmAurh012s", // S1E1
    "arcane_s1_e2": "Os4TVvOsQRs", // S1E2
    "arcane_s1_e3": "F5tSoaJ93ac", // S1E3
    
    // Arcane - Season 2
    "arcane_s2_e1": "uH6g1yskrMM", // S2E1
    "arcane_s2_e2": "WdZ-BWWQcWs", // S2E2
    
    // Family Guy - Season 20
    "familyguy_s1_e1": "ZV-21hDvvNM", // S1E1
    "familyguy_s1_e2": "ZV-21hDvvNM", // S1E2
    
    // Rick and Morty - Season 6
    "rickmorty_s1_e1": "X7HmltUWXgs", // S1E1
    "rickmorty_s1_e2": "X7HmltUWXgs", // S1E2
    
    // The Simpsons - Season 34
    "simpsons_s1_e1": "GeJA2qL8jB4", // S1E1
    "simpsons_s1_e2": "GeJA2qL8jB4", // S1E2
    
    // What If...? - Season 1
    "whatif_s1_e1": "4iLVoEg9aLk", // S1E1
    "whatif_s1_e2": "gBSUmQwbpjw", // S1E2
  
    // Trailers
    "invincible_trailer": "JuMiq7eg91M",
    "arcane_trailer": "fXmAurh012s",
    "familyguy_trailer": "nz_BY7X44kc",
    "rickmorty_trailer": "qqxJHq_CSGo",
    "simpsons_trailer": "XPG0MqIcby8",
    "whatif_trailer": "x9D0uUKJ5KI",
  };
    
  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Function to get video source based on series ID, season and episode
  const getVideoSrc = () => {
    // If it's a trailer request
    if (episodeTitle && episodeTitle.toLowerCase().includes("trailer")) {
      const trailerKey = `${seriesId}_trailer`;
      if (videoMap[trailerKey]) {
        return `https://www.youtube.com/embed/${videoMap[trailerKey]}?autoplay=1`;
      }
    }
    
    // For regular episodes
    if (currentEpisode) {
      const videoKey = `${seriesId}_s${currentSeason}_e${currentEpisode.id}`;
      if (videoMap[videoKey]) {
        return `https://www.youtube.com/embed/${videoMap[videoKey]}?autoplay=1`;
      }
    }
    
    // Use a generic video based on series ID if specific episode not found
    const genericSeriesKey = `${seriesId}_s1_e1`;
    if (videoMap[genericSeriesKey]) {
      return `https://www.youtube.com/embed/${videoMap[genericSeriesKey]}?autoplay=1`;
    }
    
    // Fallback to the first episode of Invincible if nothing matches
    return `https://www.youtube.com/embed/${videoMap["invincible_s1_e1"]}?autoplay=1`;
  };

  // Get the display title
  const displayTitle = episodeTitle || (currentEpisode 
    ? `${currentSeries?.title} - S${currentSeason} E${currentEpisode.id}: ${currentEpisode.title}`
    : currentSeries?.title);

  // Get the appropriate background image
  const backgroundImage = currentEpisode?.backgroundImage || currentSeries?.backgroundImage;

  return (
    <div className="video-container">
      {!isPlaying ? (
        <>
          <div className="title-overlay">{displayTitle}</div>
          <div 
            className="video-thumbnail" 
            style={{ 
              backgroundImage: `url(${backgroundImage})` 
            }}
          >
            <div className="custom-controls">
              <button className="play-button" onClick={handlePlay}>&#9658;</button>
            </div>
          </div>
          
          {/* Episode info overlay */}
          {currentEpisode && (
            <div className="episode-info-overlay">
              <h3>{currentEpisode.title}</h3>
              <p>{currentEpisode.description}</p>
              <div className="episode-meta">
                <span>{currentEpisode.duration}</span>
                <span>{currentEpisode.date}</span>
              </div>
            </div>
          )}
          
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </>
      ) : (
        <>
          <iframe
            className="video-frame"
            src={getVideoSrc()}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <button className="close-button visible-on-play" onClick={onClose}>
            ✕
          </button>
        </>
      )}
    </div>
  );
};

export default SeriesPlayer;