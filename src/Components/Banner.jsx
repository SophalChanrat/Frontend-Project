import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slide from "./Slide.jsx";
import {
  ANIME_MOVIE,
  HORROR_MOVIE,
  ANIMATION_MOVIE,
  ROMANCE_MOVIE,
  ACTION_MOVIE,
  TRENDING_MOVIE,
} from "../Data/banner_data.js";

export const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const location = useLocation();

  const getSlideData = () => {
    // Extract category from pathname
    const path = location.pathname.toLowerCase();
    if (path.includes('anime')) return ANIME_MOVIE;
    if (path.includes('horror')) return HORROR_MOVIE;
    if (path.includes('animation')) return ANIMATION_MOVIE;
    if (path.includes('romance')) return ROMANCE_MOVIE;
    if (path.includes('action')) return ACTION_MOVIE;
    return TRENDING_MOVIE; // Default case for home/trending
  };

  const slides = getSlideData();
  const currentSlide = slides[slideIndex];

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  // Reset slide index when category changes
  useEffect(() => {
    setSlideIndex(0);
  }, [location.pathname]);

  return (
    <div>
      {currentSlide && (
        <Slide
          content={currentSlide}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};
