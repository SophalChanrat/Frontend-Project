"use client";

import { useRef } from "react";
import "../Movie_row.css";

<<<<<<< HEAD
function Movie_row({ title, movies }) {
=======
export function Movie_row({ title, movies }) {
>>>>>>> fd1ce23ab39ecacce4292ab6535c55beee05a098
  const scrollContainerRef = useRef(null);

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
              <div className="movie-poster">
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