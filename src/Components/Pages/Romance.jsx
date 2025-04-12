import Movie_row from "../Movie_row";
import walk from "../../assets/walk.jpg";
import Sunrise from "../../assets/sunrise.jpg";
import La from "../../assets/La.jpg";
import meb4u from "../../assets/Meb4u.jpg";
import Star from "../../assets/Star.jpg";
import romeo from "../../assets/Romeo.webp";

const romancemovies = [
    { id: 1, title: "Walk", rating: 7.1, year: 2025, image: walk },
    { id: 2, title: "Sunrise", rating: 7.6, year: 2024, image: Sunrise },
    { id: 3, title: "La", rating: 7.5, year: 2024, image: La },
    { id: 4, title: "Meb4u", rating: 7.3, year: 2014, image: meb4u },
    { id: 5, title: "Star", rating: 9.0, year: 2021, image: Star },
    { id: 6, title: "Romeo", rating: 6.0, year: 2015, image: romeo },
    { id: 7, title: "Walk", rating: 7.1, year: 2025, image: walk },
    { id: 8, title: "Sunrise", rating: 7.6, year: 2024, image: Sunrise },
    { id: 9, title: "La", rating: 7.5, year: 2024, image: La },
    { id: 10, title: "Meb4u", rating: 7.3, year: 2014, image: meb4u },
]

function Romancemovies() {
    return <Movie_row title="Romance Movie" movies={romancemovies} />;
  }
  
  export default Romancemovies;