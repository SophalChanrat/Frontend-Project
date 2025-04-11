import React from "react";
import MovieRow from "./Components/Movie_row.jsx";
import { Navigation_baar } from "./Components/navigation-bar/Navigation_baar.jsx";

const movies = [
  {
    id: 1,
    name: "Violet Evergarden",
    poster: "",
    rating: "8.5",
  },
  {
    id: 2,
    name: "Ponyo",
    poster: "",
    rating: "7.8",
  },
  {
    id: 3,
    name: "Suzume",
    poster: "",
    rating: "8.2",
  },
  {
    id: 4,
    name: "Black Clover",
    poster: "",
    rating: "8.0",
  },
];

function App() {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <Navigation_baar />
      <MovieRow title="Trending Movies" movies={movies} />

    </div>
  );
}

export default App;
