import { useState } from 'react';
import './watch_movie.css';
import { movieDetails, relatedMovies } from '../data/moviedata.js';
import MoviePlayer from './Movie_player.jsx';

export default function MovieDetails() {
  // State to track the currently featured movie
  const [featuredMovie, setFeaturedMovie] = useState(movieDetails);
  // State to track all movies (both featured and related)
  const [allMovies, setAllMovies] = useState([...relatedMovies]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasNavigated, setHasNavigated] = useState(false);
  const itemsPerPage = 6;

  // State to control movie player visibility
  const [showPlayer, setShowPlayer] = useState(false);
  // State to store video type (movie or trailer)
  const [videoType, setVideoType] = useState('movie'); // 'movie' or 'trailer'

  // Get visible movies for the carousel
  const getVisibleMovies = () => {
    // Handle edge case where there are fewer items than itemsPerPage
    if (allMovies.length <= itemsPerPage) {
      return allMovies;
    }
    
    // Ensure currentIndex doesn't exceed valid bounds
    const maxStartIndex = Math.max(0, allMovies.length - itemsPerPage);
    const safeIndex = Math.min(currentIndex, maxStartIndex);
    
    return allMovies.slice(safeIndex, safeIndex + itemsPerPage);
  };

  const visibleMovies = getVisibleMovies();

  const nextSlide = () => {
    // Only navigate if there are more items to show
    if (currentIndex + itemsPerPage < allMovies.length) {
      setHasNavigated(true);
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    } else {
      // Wrap around to the beginning
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    const newIndex = Math.max(0, currentIndex - itemsPerPage);
    setCurrentIndex(newIndex);
    if (newIndex === 0) setHasNavigated(false);
  };

  // Function to handle clicking on a related movie
  const handleMovieClick = (clickedMovie) => {
    // Create a copy of all movies
    const updatedMovies = [...allMovies];
    
    // Remove the clicked movie from the array
    const filteredMovies = updatedMovies.filter(movie => movie.id !== clickedMovie.id);
    
    // Add the current featured movie to the list of related movies
    const currentFeaturedForRelated = {
      ...featuredMovie,
      // If the featured movie doesn't have an id or image yet (original movieDetails), add them
      id: featuredMovie.id || 0,
      image: featuredMovie.thumbnail || featuredMovie.backgroundImage
    };
    
    // Set the clicked movie as the featured movie
    setFeaturedMovie(clickedMovie);
    
    // Update the list of related movies
    setAllMovies([...filteredMovies, currentFeaturedForRelated]);
    
    // Reset to the first page of the carousel
    setCurrentIndex(0);
    setHasNavigated(false);
  };

  // Function to handle watch button click
  const handleWatchClick = () => {
    setVideoType('movie');
    setShowPlayer(true);
  };

  // Function to handle trailer button click
  const handleTrailerClick = () => {
    setVideoType('trailer');
    setShowPlayer(true);
  };

  // Function to close the video player
  const handleClosePlayer = () => {
    setShowPlayer(false);
  };

  return (
    <div className="movie-container">
      {/* Show MoviePlayer when showPlayer is true */}
      {showPlayer ? (
        <div className="player-overlay">
          <div className="player-header">
            <button className="close-player-button" onClick={handleClosePlayer}>×</button>
            <h2 className="player-title">
              {videoType === 'trailer' ? `${featuredMovie.title} Trailer` : featuredMovie.title}
            </h2>
          </div>
          <MoviePlayer 
            videoId="" // We'll use the movie data instead
            videoTitle={videoType === 'trailer' ? `${featuredMovie.title} Trailer` : featuredMovie.title}
            movieData={featuredMovie}
          />
        </div>
      ) : (
        <>
          {/* Close button */}
          <button className="close-button" aria-label="Close">
            ×
          </button>

          {/* Top section with background image */}
          <div className="top-section">
            <div className="top-background">
              <div 
                className="top-image" 
                style={{ backgroundImage: `url(${featuredMovie.backgroundImage})` }}
              ></div>
              <div className="overlay-gradient"></div>
            </div>

            <div className="movie-content">
              <h1 className="movie-title-watch">{featuredMovie.title}</h1>
              
              <div className="movie-description">
                <p>{featuredMovie.description}</p>
              </div>
              
              <div className="movie-metadata">
                <div className="metadata-info">
                  <span>{featuredMovie.genre}</span>
                  <span>•</span>
                  <span>{featuredMovie.year}</span>
                  <span>•</span>
                  <span>{featuredMovie.duration}</span>
                </div>
              </div>

              <div className="cast-crew">
                <p className="starring">Starring {featuredMovie.starring}</p>
                <p className="director">Director {featuredMovie.director}</p>
              </div>

              <div className="action-buttons">
                <button className="watch-button" onClick={handleWatchClick}>
                  <span className="play-icon">▶</span>
                  <span>Watch</span>
                </button>
                <button className="trailer-button" onClick={handleTrailerClick}>Trailer</button>
                <button className="watchlist-button">
                  <span className="plus-icon">+</span>
                  <span>Watch List</span>
                </button>
              </div>
            </div>
          </div>

          {/* Related section */}
          <div className="related-section">
            <h2 className="related-title">Related</h2>
            
            {/* Container for related movies with positioning context for buttons */}
            <div className="related-movies-container">
              <div className="related-movies">
                {visibleMovies.map((movie) => (
                  <div 
                    key={movie.id} 
                    className="movie-card-watch" 
                    onClick={() => handleMovieClick(movie)}
                  >
                    <div className="movie-poster">
                      <img 
                        src={movie.image || movie.thumbnail} 
                        alt={movie.title}
                        className="poster-image"
                      />
                    </div>
                    <div className="movie-card-info">
                      <p className="movie-card-title">{movie.title}</p>
                      <div className="rating">
                        <p className="movie-card-rating">{movie.rating} ★</p>
                        <p className="movie-card-year">{movie.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation buttons - only show if there are more movies than fit in one view */}
              {allMovies.length > itemsPerPage && (
                <>
                  {/* Previous button only appears after navigating forward */}
                  {hasNavigated && (
                    <button
                      onClick={prevSlide}
                      className="nav-button prev-button"
                      aria-label="Previous"
                    >
                      ‹
                    </button>
                  )}
                  <button
                    onClick={nextSlide}
                    className="nav-button next-button"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}