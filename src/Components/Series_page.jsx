"use client"

import { useState, useRef } from "react"
import { PlayIcon, PlusIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react"
import "../SeriesPage.css"

// Import your episode images
import Episode1 from "../assets/image-75-3.png"
import Episode2 from "../assets/image-75-3.png"
import Episode3 from "../assets/image-75-3.png"
import Episode4 from "../assets/image-75-3.png"
import Arcane from "../assets/arcane.png"
import FamilyGuy from "../assets/family-guy.png"
import RickMorty from "../assets/rick-morty.png"
import Simpsons from "../assets/simpsons.png"
import WhatIf from "../assets/what-if.png"
import Invincible from "../assets/invincible.png"

function SeriesPage() {
  const episodeScrollRef = useRef(null)
  const relatedScrollRef = useRef(null)
  const [selectedSeason, setSelectedSeason] = useState(1);

  // Initialize state for current content
  const [currentContent, setCurrentContent] = useState({
    title: "Invincible",
    description: "An adult animated superhero series that revolves around 17-year-old Mark Grayson, who's just like every other guy his age - except his father is the most powerful superhero on the planet, Omni-Man",
    genre: "Animation • Action",
    year: "2021",
    seasons: "3 seasons",
    starring: "Steven Yeun, J.K. Simmons, Sandra Oh",
    director: "Robert Kirkman",
    backgroundImage: Invincible
  })

  const scrollEpisodes = (direction) => {
    if (episodeScrollRef.current) {
      const container = episodeScrollRef.current
      const scrollAmount = 400
      container.scrollTo({
        left: container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      })
    }
  }

  const scrollRelated = (direction) => {
    if (relatedScrollRef.current) {
      const container = relatedScrollRef.current
      const scrollAmount = 300
      container.scrollTo({
        left: container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      })
    }
  }

  const updateContent = (content) => {
    setCurrentContent(content)
  }

  const episodes = [
    {
      id: 1,
      title: "IT'S ABOUT TIME",
      description: "When Mark Grayson finally inherits powers from his superhero father, it's a dream come true. But there's more to being a hero than just choosing a name and costume.",
      duration: "51 min",
      date: "March 21, 2021",
      image: Episode1,
      backgroundImage: Episode1,
      genre: "Animation • Action",
      starring: "Steven Yeun, J.K. Simmons",
      director: "Robert Kirkman"
    },
    {
        id: 2,
        title: "IT'S ABOUT TIME",
        description: "When Mark Grayson finally inherits powers from his superhero father, it's a dream come true. But there's more to being a hero than just choosing a name and costume.",
        duration: "51 min",
        date: "March 21, 2021",
        image: Episode2,
        backgroundImage: Episode2,
        genre: "Animation • Action",
        starring: "Steven Yeun, J.K. Simmons",
        director: "Robert Kirkman"
      },
      {
        id: 3,
        title: "IT'S ABOUT TIME",
        description: "When Mark Grayson finally inherits powers from his superhero father, it's a dream come true. But there's more to being a hero than just choosing a name and costume.",
        duration: "51 min",
        date: "March 21, 2021",
        image: Episode3,
        backgroundImage: Episode3,
        genre: "Animation • Action",
        starring: "Steven Yeun, J.K. Simmons",
        director: "Robert Kirkman"
      },
      {
        id: 4,
        title: "IT'S ABOUT TIME",
        description: "When Mark Grayson finally inherits powers from his superhero father, it's a dream come true. But there's more to being a hero than just choosing a name and costume.",
        duration: "51 min",
        date: "March 21, 2021",
        image: Episode4,
        backgroundImage: Episode4,
        genre: "Animation • Action",
        starring: "Steven Yeun, J.K. Simmons",
        director: "Robert Kirkman"
      },
      {
        id: 5,
        title: "IT'S ABOUT TIME",
        description: "When Mark Grayson finally inherits powers from his superhero father, it's a dream come true. But there's more to being a hero than just choosing a name and costume.",
        duration: "51 min",
        date: "March 21, 2021",
        image: Episode4,
        backgroundImage: Episode4,
        genre: "Animation • Action",
        starring: "Steven Yeun, J.K. Simmons",
        director: "Robert Kirkman"
      }
  ];

  const relatedSeries = [
    {
      id: 1,
      title: "ARCANE",
      subtitle: "LEAGUE OF LEGENDS",
      network: "NETFLIX | NOVEMBER",
      rating: "9.0",
      year: "2024",
      image: Arcane,
      backgroundImage: Arcane,
      description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
      genre: "Animation • Action",
      starring: "Hailee Steinfeld, Kevin Alejandro",
      director: "Pascal Charrue"
    },
    {
        id: 2,
        title: "Family Guy",
        subtitle: "LEAGUE OF LEGENDS",
        network: "NETFLIX | NOVEMBER",
        rating: "8.1",
        year: "1999",
        image: FamilyGuy,
        backgroundImage: FamilyGuy,
        description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
        genre: "Animation • Action",
        starring: "Hailee Steinfeld, Kevin Alejandro",
        director: "Pascal Charrue"
      },
      {
        id: 3,
        title: "Rick and Morty",
        subtitle: "LEAGUE OF LEGENDS",
        network: "NETFLIX | NOVEMBER",
        rating: "9.1",
        year: "2013",
        image: RickMorty,
        backgroundImage: RickMorty,
        description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
        genre: "Animation • Action",
        starring: "Hailee Steinfeld, Kevin Alejandro",
        director: "Pascal Charrue"
      },
      {
        id: 4,
        title: "The Simpsons",
        subtitle: "LEAGUE OF LEGENDS",
        network: "NETFLIX | NOVEMBER",
        rating: "8.7",
        year: "1989",
        image: Simpsons,
        backgroundImage: Simpsons,
        description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
        genre: "Animation • Action",
        starring: "Hailee Steinfeld, Kevin Alejandro",
        director: "Pascal Charrue"
      },
      {
        id: 5,
        title: "Invincible",
        subtitle: "LEAGUE OF LEGENDS",
        network: "NETFLIX | NOVEMBER",
        rating: "8.7",
        year: "2021",
        image: Invincible,
        backgroundImage: Invincible,
        description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
        genre: "Animation • Action",
        starring: "Hailee Steinfeld, Kevin Alejandro",
        director: "Pascal Charrue"
      },
      {
        id: 6,
        title: "What If...?",
        subtitle: "LEAGUE OF LEGENDS",
        network: "NETFLIX | NOVEMBER",
        rating: "7.3",
        year: "2021",
        image: WhatIf,
        backgroundImage: WhatIf,
        description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
        genre: "Animation • Action",
        starring: "Hailee Steinfeld, Kevin Alejandro",
        director: "Pascal Charrue"
      },
  ];

  return (
    <div className="series-page-container">
      {/* Close button */}
      <button className="close-button" aria-label="Close">
        ×
      </button>

      {/* Top section with background image */}
      <div className="top-section">
        <div className="top-background">
          <div 
            className="top-image" 
            style={{ backgroundImage: `url(${currentContent.backgroundImage})` }}
          ></div>
          <div className="overlay-gradient"></div>
        </div>

        <div className="series-content">
          <h1 className="series-title">{currentContent.title}</h1>
          
          <div className="series-description">
            <p>{currentContent.description}</p>
          </div>
          
          <div className="series-metadata">
            <div className="metadata-info">
              <span>{currentContent.genre}</span>
              <span>•</span>
              <span>{currentContent.year}</span>
              <span>•</span>
              <span>{currentContent.seasons}</span>
            </div>
          </div>

          <div className="cast-crew">
            <p className="starring">Starring {currentContent.starring}</p>
            <p className="director">Director {currentContent.director}</p>
          </div>

          <div className="action-buttons">
            <button className="watch-button">
              <PlayIcon className="icon" />
              <span>Watch</span>
            </button>
            <button className="trailer-button">Trailer</button>
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
                <option value={1}>Season 1</option>
                <option value={2}>Season 2</option>
                <option value={3}>Season 3</option>
            </select>
            <ChevronDownIcon className="dropdown-icon" />
        </div>

        <div className="episodes-scroll-container">
          <button onClick={() => scrollEpisodes('left')} className="scroll-button scroll-left">
            <ChevronRightIcon className="chevron-icon flipped" />
          </button>
          
          <div ref={episodeScrollRef} className="episodes-scroll">
            {episodes.map((episode) => (
              <div key={episode.id} className="episode-card" onClick={() => updateContent(episode)}>
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
        {relatedSeries.map((series) => (
            <div key={series.id} className="related-card" onClick={() => updateContent(series)}>
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
  )
}

export default SeriesPage