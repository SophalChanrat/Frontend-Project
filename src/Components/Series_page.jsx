import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { PlayIcon, PlusIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react";
import SeriesPlayer from "./Series_player.jsx";
import { seriesData, relatedSeriesData } from "../data/seriesdata.js";
import "../SeriesPage.css";
import { handleAddToWatchlist } from "./watchList/WatchlistCom";

function SeriesPage() {
  const navigate = useNavigate(); // Hook for navigation
  const episodeScrollRef = useRef(null);
  const relatedScrollRef = useRef(null);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [currentSeriesId, setCurrentSeriesId] = useState("invincible");
  const [showPlayer, setShowPlayer] = useState(false);
  const [playerConfig, setPlayerConfig] = useState({
    seriesId: null,
    seasonNumber: null,
    episodeId: null,
    episodeTitle: null,
  });

  // Get current series data
  const getCurrentSeriesData = () => {
    if (seriesData[currentSeriesId]) {
      return seriesData[currentSeriesId];
    }

    const relatedSeries = relatedSeriesData.find((series) => series.id === currentSeriesId);
    if (relatedSeries) {
      return {
        ...relatedSeries,
        episodesBySeason: {
          1: [
            {
              id: 1,
              title: "Episode 1",
              description: `First episode of ${relatedSeries.title}`,
              duration: "45 min",
              date: "2023",
              image: relatedSeries.image,
              backgroundImage: relatedSeries.backgroundImage,
            },
            {
              id: 2,
              title: "Episode 2",
              description: `Second episode of ${relatedSeries.title}`,
              duration: "42 min",
              date: "2023",
              image: relatedSeries.image,
              backgroundImage: relatedSeries.backgroundImage,
            },
          ],
        },
      };
    }

    return seriesData[Object.keys(seriesData)[0]]; // Fallback to the first series
  };

  const currentSeries = getCurrentSeriesData();
  const currentEpisodes = currentSeries?.episodesBySeason[selectedSeason] || [];

  const scrollEpisodes = (direction) => {
    if (episodeScrollRef.current) {
      const container = episodeScrollRef.current;
      const scrollAmount = 400;
      container.scrollTo({
        left: container.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      });
    }
  };

  const scrollRelated = (direction) => {
    if (relatedScrollRef.current) {
      const container = relatedScrollRef.current;
      const scrollAmount = 300;
      container.scrollTo({
        left: container.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      });
    }
  };

  const handleSeriesChange = (seriesId) => {
    setCurrentSeriesId(seriesId);
    setSelectedSeason(1); // Reset to season 1 when changing series
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEpisodeSelect = (episode) => {
    setPlayerConfig({
      seriesId: currentSeriesId,
      seasonNumber: selectedSeason,
      episodeId: episode.id,
      episodeTitle: episode.title,
    });
    setShowPlayer(true);
  };

  const handlePlaySeries = () => {
    setPlayerConfig({
      seriesId: currentSeriesId,
      seasonNumber: 1,
      episodeId: 1,
      episodeTitle: null,
    });
    setShowPlayer(true);
  };

  const handlePlayTrailer = () => {
    setPlayerConfig({
      seriesId: currentSeriesId,
      seasonNumber: null,
      episodeId: null,
      episodeTitle: `${currentSeries.title} Trailer`,
    });
    setShowPlayer(true);
  };

  const handleAddToWatchlistClick = () => {
    handleAddToWatchlist(currentSeries); // Add the current series to the watchlist
    alert(`${currentSeries.title} has been added to your watchlist!`);
  };

  const handleClosePage = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const seasonsCount = Object.keys(currentSeries?.episodesBySeason || {}).length;

  return (
    <div className="series-page-container">
      {/* Close button */}
      <button className="close-button" aria-label="Close" onClick={handleClosePage}>
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
            <button className="trailer-button" onClick={handlePlayTrailer}>
              Trailer
            </button>
            <button className="watchlist-button" onClick={handleAddToWatchlistClick}>
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
              <option key={i + 1} value={i + 1}>
                Season {i + 1}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="dropdown-icon" />
        </div>

        <div className="episodes-scroll-container">
          <button onClick={() => scrollEpisodes("left")} className="scroll-button scroll-left">
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

          <button onClick={() => scrollEpisodes("right")} className="scroll-button scroll-right">
            <ChevronRightIcon className="chevron-icon" />
          </button>
        </div>
      </div>

      {/* Related Series Section */}
      <div className="related-container">
        <h2>Related</h2>
        <div className="related-scroll-container">
          <button onClick={() => scrollRelated("left")} className="scroll-button scroll-left">
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
                  <img src={series.image} alt={series.title} className="related-image" />
                </div>
                <div className="related-info">
                  <h3 className="related-series-title">{series.title}</h3>
                  <div className="series-meta">
                    <span className="series-rating">{series.rating}</span>
                    <span className="series-separator">|</span>
                    <span>{series.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => scrollRelated("right")} className="scroll-button scroll-right">
            <ChevronRightIcon className="chevron-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeriesPage;