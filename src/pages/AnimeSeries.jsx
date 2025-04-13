import React from 'react'
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { Movie_row} from '../Components/Movie_row'
import { CategoryChooser } from '../Components/CategoryChooser'
import { animeSeries } from '../data/moviedata'
import { Banner } from '../Components/Banner'

export const AnimeSeries = () => {
  return (
    <div>
        <Navigation_baar />
        <Banner />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending Today" movies={animeSeries} type='series'/>
            <Movie_row title="Latest Release" movies={animeSeries} type='series'/>
            <Movie_row title="Coming Soon" movies={animeSeries} type='series'/>
        </div>
        <Footer />
    </div>
  )
}
