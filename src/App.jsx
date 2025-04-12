import React from "react";
import TrendingMovies from "./Components/Pages/Animation.jsx";
import { Navigation_baar } from "./Components/navigation-bar/Navigation_baar.jsx";
import Romancemovies from "./Components/Pages/Romance.jsx";

const movies = [
];


function App() {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <Navigation_baar />
      <TrendingMovies />
      <Romancemovies />

    </div>
  );
}

export default App;
