import React from 'react'
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { Movie_row } from '../Components/Movie_row'
import { CategoryChooser } from '../Components/CategoryChooser'
import { romanceSeries } from '../data/moviedata'

export const RomanceSeries = () => {
  return (
    <div>
        <Navigation_baar />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending Today" movies={romanceSeries} />
            <Movie_row title="Latest Release" movies={romanceSeries} />
            <Movie_row title="Coming Soon" movies={romanceSeries} />
        </div>
        <Footer />
    </div>
  );
}

export default RomanceSeries;
