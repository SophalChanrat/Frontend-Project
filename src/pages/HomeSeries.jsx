import React from 'react'

import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { Movie_row} from '../Components/Movie_row'
import { CategoryChooser } from '../Components/CategoryChooser'
import { Banner } from '../Components/Banner'
import { trendingSeries } from '../data/moviedata'

export const HomeSeries = () => {
  return (
    <div>
        <Navigation_baar />
        <Banner />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending Today" movies={trendingSeries} type='series'/>
            <Movie_row title="Latest Release" movies={trendingSeries} type='series'/>
            <Movie_row title="Coming Soon" movies={trendingSeries} type='series'/>
        </div>
        <Footer />
    </div>
  )
}
