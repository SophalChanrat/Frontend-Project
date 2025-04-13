import React, { useState, useRef } from "react";
import { PlayIcon, PlusIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react";
import SeriesPlayer from "./Series_player.jsx";
import { seriesData, relatedSeriesData } from "../data/seriesdata.js";
import "../SeriesPage.css";

function SeriesPage() {
  const episodeScrollRef = useRef(null);
  const relatedScrollRef = useRef(null);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [currentSeriesId, setCurrentSeriesId] = useState("invincible");
  const [showPlayer, setShowPlayer] = useState(false);
  const [playerConfig, setPlayerConfig] = useState({
    seriesId: null,
    seasonNumber: null,
    episodeId: null,
    episodeTitle: null
  });

  // Get current series data
  const currentSeries = seriesData[currentSeriesId];
  
  // Get episodes for the current season
  const currentEpisodes = currentSeries?.episodesBySeason[selectedSeason] || [];

  const scrollEpisodes = (direction) => {
    if (episodeScrollRef.current) {
      const container = episodeScrollRef.current;
      const scrollAmount = 400;
      container.scrollTo({
        left: container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      });
    }
  };

  const scrollRelated = (direction) => {
    if (relatedScrollRef.current) {
      const container = relatedScrollRef.current;
      const scrollAmount = 300;
      container.scrollTo({
        left: container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      });
    }
  };

  const handleSeriesChange = (seriesId) => {
    // Check if the series exists in our data
    if (seriesData[seriesId]) {
      setCurrentSeriesId(seriesId);
      setSelectedSeason(1); // Reset to season 1 when changing series
    } else {
      // For related series that don't have full data yet
      const relatedSeries = relatedSeriesData.find(series => series.id === seriesId);
      if (relatedSeries) {
        // We could add more handling here for related series
        console.log("Selected related series:", relatedSeries.title);
        // For now, just set the current series to invincible
        setCurrentSeriesId("invincible");
      }
    }
  };

  const handleEpisodeSelect = (episode) => {
    // Open the player with the selected episode
    setPlayerConfig({
      seriesId: currentSeriesId,
      seasonNumber: selectedSeason,
      episodeId: episode.id,
      episodeTitle: null // Will build the title based on season, episode, etc.
    });
    setShowPlayer(true);
  };
  
  const handlePlaySeries = () => {
    // Start playing from season 1, episode 1
    setPlayerConfig({
      seriesId: currentSeriesId,
      seasonNumber: 1,
      episodeId: 1,
      episodeTitle: null
    });
    setShowPlayer(true);
  };
  
  const handlePlayTrailer = () => {
    // Play the series trailer
    setPlayerConfig({
      seriesId: currentSeriesId,
      seasonNumber: null,
      episodeId: null,
      episodeTitle: `${currentSeries.title} Trailer`
    });
    setShowPlayer(true);
  };
  
  // Get the number of seasons for the dropdown
  const seasonsCount = Object.keys(currentSeries?.episodesBySeason || {}).length;

  return (
    <div className="series-page-container">
      {/* Close button */}
      <button className="close-button" aria-label="Close">
        ×
      </button>

      {/* Video Player Modal */}
      {showPlayer && (
        <SeriesPlayer
          seriesId={playerConfig.seriesId}
          seasonNumber={playerConfig.seasonNumber}
          episodeId={playerConfig.episodeId}
          episodeTitle={playerConfig.episodeTitle}
          seriesData={seriesData}
          onClose={() => setShowPlayer(false)}
        />
      )}

      {/* Top section with background image */}
      <div className="top-section">
        <div className="top-background">
          <div 
            className="top-image" 
            style={{ backgroundImage: `url(${currentSeries.backgroundImage})` }}
          ></div>
          <div className="overlay-gradient"></div>
        </div>

        <div className="series-content">
          <h1 className="series-title">{currentSeries.title}</h1>
          
          <div className="series-description">
            <p>{currentSeries.description}</p>
          </div>
          
          <div className="series-metadata">
            <div className="metadata-info">
              <span>{currentSeries.genre}</span>
              <span>•</span>
              <span>{currentSeries.year}</span>
              <span>•</span>
              <span>{currentSeries.seasons}</span>
            </div>
          </div>

          <div className="cast-crew">
            <p className="starring">Starring {currentSeries.starring}</p>
            <p className="director">Director {currentSeries.director}</p>
          </div>

          <div className="action-buttons">
            <button className="watch-button" onClick={handlePlaySeries}>
              <PlayIcon className="icon" />
              <span>Watch</span>
            </button>
            <button className="trailer-button" onClick={handlePlayTrailer}>Trailer</button>
            <button className="watchlist-button">
              <PlusIcon className="icon" />
              <span>Watch List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="episodes-container">
        <h2>Episodes</h2>
        <div className="season-selector">
            <select 
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(Number(e.target.value))}
                className="season-dropdown"
            >
                {[...Array(seasonsCount)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>Season {i + 1}</option>
                ))}
            </select>
            <ChevronDownIcon className="dropdown-icon" />
        </div>

        <div className="episodes-scroll-container">
          <button onClick={() => scrollEpisodes('left')} className="scroll-button scroll-left">
            <ChevronRightIcon className="chevron-icon flipped" />
          </button>
          
          <div ref={episodeScrollRef} className="episodes-scroll">
            {currentEpisodes.map((episode) => (
              <div 
                key={episode.id} 
                className="episode-card" 
                onClick={() => handleEpisodeSelect(episode)}
              >
                <img src={episode.image} alt={`Episode ${episode.id}`} className="episode-image" />
                <div className="episode-info">
                  <h3>Episode {episode.id}</h3>
                  <h4>{episode.title}</h4>
                  <p className="episode-description">{episode.description}</p>
                  <div className="episode-meta">
                    <span>{episode.duration}</span>
                    <span>{episode.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={() => scrollEpisodes('right')} className="scroll-button scroll-right">
            <ChevronRightIcon className="chevron-icon" />
          </button>
        </div>
      </div>

      {/* Related Series Section */}
      <div className="related-container">
        <h2>Related</h2>
        <div className="related-scroll-container">
          <button onClick={() => scrollRelated('left')} className="scroll-button scroll-left">
            <ChevronRightIcon className="chevron-icon flipped" />
          </button>
          
          <div ref={relatedScrollRef} className="related-scroll">
            {relatedSeriesData.map((series) => (
              <div 
                key={series.id} 
                className="related-card" 
                onClick={() => handleSeriesChange(series.id)}
              >
                <div className="related-image-container">
                  <img 
                    src={series.image} 
                    alt={series.title} 
                    className="related-image" 
                  />
                </div>
                <div className="related-info">
                  <h3 className="series-title">{series.title}</h3>
                  <div className="series-meta">
                    <span className="series-rating">{series.rating}</span>
                    <span className="series-separator">|</span>
                    <span className="series-year">{series.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={() => scrollRelated('right')} className="scroll-button scroll-right">
            <ChevronRightIcon className="chevron-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeriesPage;