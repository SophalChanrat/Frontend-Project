import React from 'react'
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { Movie_row } from '../Components/Movie_row'
import { CategoryChooser } from '../Components/CategoryChooser'
import { Banner } from '../Components/Banner'
import { horrorMovies } from '../data/moviedata'

export const HorrorPage = () => {
  return (
    <div>
        <Navigation_baar />
        <Banner />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending Today" movies={horrorMovies} type='horror'/>
            <Movie_row title="Latest Release" movies={horrorMovies} type='horror'/>
            <Movie_row title="Coming Soon" movies={horrorMovies} type='horror'/>
        </div>
        <Footer />
    </div>
  )
}
