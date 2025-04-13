import React from 'react';
import '../style/slide.css';
import playIcon from '../assets/play.svg';
import bookmarkIcon from '../assets/bookmark.svg';
import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';
import { useNavigate } from 'react-router-dom';
import { useUser } from './context/UserProvider';
import { handleAddToWatchlist } from './watchList/WatchlistCom';

const Slide = ({ content, onPrev, onNext }) => {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();

  const handleWatchClick = () => {
    navigate(`/movie/${content.id}`, { 
      state: { 
        movie: {
          ...content,
          backgroundImage: content.img,
          thumbnail: content.img,
          image: content.img
        },
        autoplay: true 
      } 
    });
  };

  const handleTrailerClick = () => {
    navigate(`/movie/${content.id}`, { 
      state: { 
        movie: {
          ...content,
          backgroundImage: content.img,
          thumbnail: content.img,
          image: content.img
        },
        playTrailer: true 
      } 
    });
  };

  const handleBookmarkClick = () => {
    // Format the movie object with the correct image properties
    const movieToAdd = {
      ...content,
      backgroundImage: content.img,
      thumbnail: content.img,
      image: content.img
    };
    handleAddToWatchlist(movieToAdd, user, updateUser);
  };

  return (
    <div className="slide">
      <img src={content.img} alt={content.title} className="slide-bg" />
      <div className='info-container'>
        <div className="slide-overlay">
          <div className="slide-info">
            <div className="slide-genres">
              {content.genres.map((genre, index) => (
                <span className="genre-tag" key={index}>{genre}</span>
              ))}
            </div>
            <h1 className="slide-title">{content.title}</h1>
            <p className="slide-desc">{content.description}</p>
            <div className="slide-actions">
              <button className="btn red" onClick={handleWatchClick}>
                <img src={playIcon} alt="Play" className="icon" />
                Watch
              </button>
              <button className="btn outline" onClick={handleTrailerClick}>
                Trailer
              </button>
              <button className="btn icon-only" onClick={handleBookmarkClick}>
                <img src={bookmarkIcon} alt="Bookmark" className="icon" />
              </button>
            </div>
          </div>

          <div className="slide-nav">
            <button onClick={onPrev}>
              <img src={leftArrow} alt="Left-Arrow" className="icon" />
            </button>
            <button onClick={onNext}>
              <img src={rightArrow} alt="Right-Arrow" className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
