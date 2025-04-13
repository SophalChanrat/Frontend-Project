import React from 'react'
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { Movie_row} from '../Components/Movie_row'
import { CategoryChooser } from '../Components/CategoryChooser'
import { actionSeries } from '../data/moviedata'

export const ActionSeries = () => {
    
  return (
    <>
        <Navigation_baar />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending Series" movies={actionSeries} />
            <Movie_row title="Latest Release" movies={actionSeries} />
            <Movie_row title="Coming soon" movies={actionSeries} />
        </div>
        <Footer />
    </>
  )
}
