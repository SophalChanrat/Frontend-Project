import React from "react";
import { FaStar } from "react-icons/fa";
import "../Movie_row.css";


const MovieRow = ({ title, movies }) => {
  return (
    <div className="mb-8">
      <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] relative"
          >
            <img
              src={movie.poster}
              alt={movie.name}
              className="rounded-lg w-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded flex items-center space-x-1">
              <FaStar className="text-yellow-400" />
              <span className="text-sm">{movie.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
