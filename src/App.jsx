import React from "react";
import TrendingMovies from "./Components/Pages/Animation.jsx";
import { Navigation_baar } from "./Components/navigation-bar/Navigation_baar.jsx";

const movies = [
];


function App() {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <Navigation_baar />
      <TrendingMovies />

    </div>
  );
}

export default App;
