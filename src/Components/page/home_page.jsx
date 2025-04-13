import React, { useEffect, useState } from "react";
import {Navigation_baar} from "../navigation-bar/Navigation_baar.jsx";
import {CategoryChooser} from "../CategoryChooser.jsx";
import WatchMovie from "../Watch_movie.jsx";
import Footer from "../footer/Footer.jsx";
import "./home_page.css";
import { Movie_row } from "../Movie_row.jsx";

function HomePage() {
  // Dummy data for Movie_row if needed
  const [rows, setRows] = useState([
    {
      title: "Trending Now",
      movies: [
        {
          id: 1,
          title: "Movie 1",
          image: "/movie1.jpg",
          rating: 8.5,
          year: 2022,
        },
        {
          id: 2,
          title: "Movie 2",
          image: "/movie2.jpg",
          rating: 7.8,
          year: 2023,
        },
        // Add more movie objects...
      ],
    },
    // Add more rows as needed...
  ]);

  return (
    <div className="homepage">
        <Navigation_baar />
        <CategoryChooser />
        <WatchMovie />
        {rows.map((row, index) => (
        <Movie_row key={index} title={row.title} movies={row.movies} />
      ))}
      <Footer />
    </div>
  );
}

export default HomePage;
