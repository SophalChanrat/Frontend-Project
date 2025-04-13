import React, { useState, useEffect } from "react";
import Slide from "./Components/Slide.jsx";
import {
  ANIME_MOVIE,
  HORROR_MOVIE,
  ANIMATION_MOVIE,
  ROMANCE_MOVIE,
  ACTION_MOVIE,
  TRENDING_MOVIE,
} from "./Data/banner_data.js";

const App = () => {
  const [category, setCategory] = useState("anime");
  const [slideIndex, setSlideIndex] = useState(0);

  const getSlideData = () => {
    switch (category) {
      case "anime": return ANIME_MOVIE;
      case "horror": return HORROR_MOVIE;
      case "animation": return ANIMATION_MOVIE;
      case "romance": return ROMANCE_MOVIE;
      case "action": return ACTION_MOVIE;
      case "trending": return TRENDING_MOVIE;
      default: return ANIME_MOVIE;
    }
  };

  const slides = getSlideData();
  const currentSlide = slides[slideIndex];

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  // Reset to first slide on category change
  useEffect(() => {
    setSlideIndex(0);
  }, [category]);

  return (
    <div>
      <nav className="category-nav">
        {["anime", "horror", "animation", "romance", "action", "trending"].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </nav>

      {/* Pass content + control buttons */}
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

export default App;
