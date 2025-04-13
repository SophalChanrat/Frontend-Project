"use client";
import "./WatchList.css";
import { useUser } from "../context/UserProvider.jsx";

export const handleAddToWatchlist = (movieToAdd, user, updateUser) => {
  if (!user) {
    alert("Please login to add movies to your watchlist");
    return;
  }

  const currentWatchlist = user.watchlist || [];
    
  if (currentWatchlist.some(item => item.id === movieToAdd.id)) {
    alert("This movie is already in your watchlist!");
    return;
  }

  const updatedWatchlist = [...currentWatchlist, movieToAdd];
  const updatedUser = { ...user, watchlist: updatedWatchlist };
  updateUser(updatedUser);
  alert(`${movieToAdd.title} has been added to your watchlist!`);
};

export function WatchListCom({ title, movies }) {
  const { user, updateUser } = useUser();
  const handleRemoveFromWatchlist = (movieToRemove) => {
    if (!user) return;

    const updatedWatchlist = user.watchlist.filter(
      movie => movie.id !== movieToRemove.id
    );
    const updatedUser = { ...user, watchlist: updatedWatchlist };
    updateUser(updatedUser);
    alert(`${movieToRemove.title} has been removed from your watchlist!`);
  };
  return (
    <div className="watchlist-container">
      <h1 className="watchlist-title">{title}</h1>
      <div className="watchlist-movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="watchlist-movie-card">
            <div className="watchlist-movie-poster">
              <img
                src={movie.image || "/placeholder.svg"}
                alt={movie.title}
                className="watchlist-poster-image"
              />
            </div>
            <h3 className="watchlist-movie-title">{movie.title}</h3>
            <div className="watchlist-movie-rating">
              <span className="watchlist-star">★</span>
              <span className="watchlist-rating-text">
                {movie.rating} | {movie.year}
              </span>
            </div>
            <button 
              onClick={() => handleRemoveFromWatchlist(movie)}
              className="watchlist-remove-button"
            >
              Remove from Watchlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchListCom;
