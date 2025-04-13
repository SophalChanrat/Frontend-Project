"use client";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Movie_row.css";

export function Movie_row({ title, movies, type="movie" }) {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (type === "series") {
      navigate(`/series/${item.id}`, { state: { seriesData: item } });
    } else {
      navigate(`/movie/${item.id}`, { state: { movie: item } });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300;
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="trending-container">
      <h1 className="trending-title">{title}</h1>

      <div className="movie-slider-container">
        <div ref={scrollContainerRef} className="movie-slider">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div
                key={movie.id}
                onClick={() => handleItemClick(movie)}
                className="movie-poster"
                style={{cursor: "pointer"}}
               >
                <img
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  className="poster-image"
                />
              </div>
              <h3 className="movie-title">{movie.title}</h3>
              <div className="movie-rating">
                <span className="star">★</span>
                <span className="rating-text">
                  {movie.rating} | {movie.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollLeft}
          className="scroll-button scroll-left"
          aria-label="Scroll left"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={scrollRight}
          className="scroll-button scroll-right"
          aria-label="Scroll right"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Movie_row;