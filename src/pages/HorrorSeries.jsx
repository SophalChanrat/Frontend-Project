import React from 'react'
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { Movie_row } from '../Components/Movie_row'
import { CategoryChooser } from '../Components/CategoryChooser'
import { horrorSeries } from '../data/moviedata'
import { Banner } from '../Components/Banner'

export const HorrorSeries = () => {
  return (
    <div>
        <Navigation_baar />
        <Banner />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending Today" movies={horrorSeries} type='horror'/>
            <Movie_row title="Latest Release" movies={horrorSeries} type='horror'/>
            <Movie_row title="Coming Soon" movies={horrorSeries} type='horror'/>
        </div>
        <Footer />
    </div>
  )
}
