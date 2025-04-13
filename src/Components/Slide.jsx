import React from 'react';
import '../style/slide.css';
import playIcon from '../assets/play.svg';
import bookmarkIcon from '../assets/bookmark.svg';
import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';

const Slide = ({ content, onPrev, onNext }) => {
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
              <button className="btn red">
                <img src={playIcon} alt="Play" className="icon" />
                Watch
              </button>
              <button className="btn outline">
                Trailer
              </button>
              <button className="btn icon-only">
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
