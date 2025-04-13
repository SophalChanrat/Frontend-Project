import Movie_row from "../Components/Movie_row";
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { CategoryChooser } from '../Components/CategoryChooser'
import { romanceMovies } from '../data/moviedata'


export default function RomancePage() {
    return (
      <>
        <Navigation_baar />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending today" movies={romanceMovies} />
            <Movie_row title="Latest Release" movies={romanceMovies} />
            <Movie_row title="Comming soon" movies={romanceMovies} />
        </div>
        <Footer />
      </>
    ); 
  }
