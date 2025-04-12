import React from 'react'
import './App.css'
import { Navigation_baar } from './Components/navigation-bar/Navigation_baar'
import { Footer } from './Components/footer/Footer'
import { SignUp } from './Components/SignUp'
import { Login } from './Components/Login'
import { Movie_row } from './Components/Movie_row'
import { CategoryChooser } from './Components/CategoryChooser'
import COCO from "./assets/COCO.jpg";
import KungFu from "./assets/kung-fu-panda-4-he-poster.jpg";
import InsideOut from "./assets/Inside-out2.jpeg";
import Nemo from "./assets/Nemo.jpeg";
import Spiderman from "./assets/spiderman.jpg";
import zootopia from "./assets/zootopia.jpg";

export const Home = () => {
  const trendingMovies = [
    { id: 1, title: "CoCo", rating: 7.1, year: 2025, image: COCO },
    { id: 2, title: "KungFu Panda 4", rating: 7.6, year: 2024, image: KungFu },
    { id: 3, title: "Inside Out 2", rating: 7.5, year: 2024, image: InsideOut },
    { id: 4, title: "Nemo", rating: 7.3, year: 2014, image: Nemo },
    { id: 5, title: "Spider-man: into the spider-verse ", rating: 9.0, year: 2021, image: Spiderman },
    { id: 6, title: "Zootopia", rating: 6.0, year: 2015, image: zootopia },
    { id: 7, title: "Nemo", rating: 7.3, year: 2014, image: Nemo },
    { id: 8, title: "KungFu Panda 4", rating: 7.6, year: 2024, image: KungFu },
    { id: 9, title: "Inside Out 2", rating: 7.5, year: 2024, image: InsideOut },
    { id: 10, title: "Nemo", rating: 7.3, year: 2014, image: Nemo },
  ];
  return (
    <div className="home-container">
        <Navigation_baar />
        <CategoryChooser />
        <div className="main-content">
          <Movie_row title="Trending" movies={trendingMovies} />
          <Movie_row title="Action" movies={trendingMovies} />
        </div>
        <Footer />
    </div>
  );
}
export default Home;
