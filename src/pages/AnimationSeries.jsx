import React from 'react'
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { Movie_row} from '../Components/Movie_row'
import { CategoryChooser } from '../Components/CategoryChooser'
import { Banner } from '../Components/Banner'
import { animationSeries } from '../data/moviedata'


export const AnimationSeries = () => {
  return (
    <div>
        <Navigation_baar />
        <Banner />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending Today" movies={animationSeries} type='series'/>
            <Movie_row title="Latest Release" movies={animationSeries} type='series'/>
            <Movie_row title="Coming Soon" movies={animationSeries} type='series'/>
        </div>
        <Footer />
    </div>
  )
}
