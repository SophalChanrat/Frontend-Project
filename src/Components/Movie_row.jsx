"use client"

import { useRef } from "react"
import "../Movie_row.css"
import COCO from "../assets/COCO.jpg"
import KungFu from "../assets/kung-fu-panda-4-he-poster.jpg"
import InsideOut from "../assets/Inside-out2.jpeg"
import Nemo from "../assets/Nemo.jpeg"
import Spiderman from "../assets/Spiderman.jpg"
import Zootopia from "../assets/Zootopia.jpg"


function Movie_row() {
  const scrollContainerRef = useRef(null)
  const latestReleaseRef = useRef(null);
  const comingSoonRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 300
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 300
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth",
      })
    }
  }
  const scrollRight1 = () => {
    if (latestReleaseRef.current) {
      const container = latestReleaseRef.current
      const scrollAmount = 300
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollLeft1 = () => {
    if (latestReleaseRef.current) {
      const container = latestReleaseRef.current
      const scrollAmount = 300
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth",
      })
    }
  }  
  const scrollRight2 = () => {
    if (comingSoonRef.current) {
      const container = comingSoonRef.current
      const scrollAmount = 300
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollLeft2 = () => {
    if (comingSoonRef.current) {
      const container = comingSoonRef.current
      const scrollAmount = 300
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const movies = [
    {
      id: 1,
      title: "CoCo",
      rating: 7.1,
      year: 2025,
      image: COCO,
    },
    {
      id: 2,
      title: "KungFu Panda 4",
      rating: 7.6,
      year: 2024,
      image: KungFu, 
    },
    {
      id: 3,
      title: "Inside Out 2",
      rating: 7.5,
      year: 2024,
      image: InsideOut, 
    },
    {
      id: 4,
      title: "Finding Nemo",
      rating: 6.0,
      year: 2025,
      image: Nemo, 
    },
    {
      id: 5,
      title: "Spiderman: Into Spider-Verse",
      rating: 6.9,
      year: 2025,
      image: Spiderman, 
    },
    {
      id: 6,
      title: "Zootopia",
      rating: 7.9,
      year: 2024,
      image: Zootopia, 
    },
    {
      id: 7,
      title: "Zootopia",
      rating: 7.9,
      year: 2024,
      image: Zootopia, 
    },
  ]

  return (
    <div className="trending-container">
      <h1 className="trending-title">Trending Today</h1>

      <div className="movie-slider-container">
        <div ref={scrollContainerRef} className="movie-slider">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-poster">
                <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="poster-image" />
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

        <button onClick={scrollLeft} className="scroll-button scroll-left" aria-label="Scroll left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button onClick={scrollRight} className="scroll-button scroll-right" aria-label="Scroll right">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <h1 className="trending-title">Latest release</h1>

      <div className="movie-slider-container">
        <div ref={latestReleaseRef} className="movie-slider">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-poster">
                <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="poster-image" />
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

        <button onClick={scrollLeft1} className="scroll-button scroll-left" aria-label="Scroll left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button onClick={scrollRight1} className="scroll-button scroll-right" aria-label="Scroll right">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <h1 className="trending-title">Coming Soon</h1>

      <div className="movie-slider-container">
        <div ref={comingSoonRef} className="movie-slider">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-poster">
                <img src={movie.image || "/placeholder.svg"} alt={movie.title} className="poster-image" />
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

        <button onClick={scrollLeft2} className="scroll-button scroll-left" aria-label="Scroll left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button onClick={scrollRight2} className="scroll-button scroll-right" aria-label="Scroll right">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Movie_row

