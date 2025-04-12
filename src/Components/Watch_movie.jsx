import { useState } from 'react';
import './watch_movie.css';
import { movieDetails, relatedMovies } from '../data/moviedata.js';

export default function MovieDetails() {
  // State to track the currently featured movie
  const [featuredMovie, setFeaturedMovie] = useState(movieDetails);
  // State to track all movies (both featured and related)
  const [allMovies, setAllMovies] = useState([...relatedMovies]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasNavigated, setHasNavigated] = useState(false);
  const itemsPerPage = 6;

  // Get visible movies for the carousel
  const visibleMovies = allMovies.slice(currentIndex, currentIndex + itemsPerPage);

  const nextSlide = () => {
    setHasNavigated(true);
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= allMovies.length
        ? 0
        : prevIndex + itemsPerPage
    );
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

  return (
    <div className="movie-container">
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
          <h1 className="movie-title">{featuredMovie.title}</h1>
          
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
            <button className="watch-button">
              <span className="play-icon">▶</span>
              <span>Watch</span>
            </button>
            <button className="trailer-button">Trailer</button>
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
        
        {/* New container for related movies with positioning context for buttons */}
        <div className="related-movies-container">
          <div className="related-movies">
            {visibleMovies.map((movie) => (
              <div 
                key={movie.id} 
                className="movie-card" 
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

          {/* Navigation buttons */}
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
    </div>
  );
}