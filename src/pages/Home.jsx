import React from 'react'
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { Movie_row} from '../Components/Movie_row'
import { CategoryChooser } from '../Components/CategoryChooser'
import { Banner } from '../Components/Banner'
import { trendingMovies } from '../data/moviedata'
import { latestMovies } from '../data/moviedata'
import { upcomingMovies } from '../data/moviedata'

export const Home = () => {
  return (
    <div>
      <Navigation_baar />
      <Banner />
      <CategoryChooser />
        <Movie_row title="Trending Today" movies={trendingMovies} />
        <Movie_row title="Latest Release" movies={latestMovies} />
        <Movie_row title="Coming Soon" movies={upcomingMovies} />
      <Footer />
    </div>
  )
}
