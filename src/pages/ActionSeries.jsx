import React from 'react'
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { Movie_row} from '../Components/Movie_row'
import { CategoryChooser } from '../Components/CategoryChooser'
import daredevil from "../assets/actionSeries/dare_devil.jpg"
import loki from "../assets/actionSeries/Loki.jpg"
import peacemaker from "../assets/actionSeries/peacemaker.jpg"
import prisonbreak from "../assets/actionSeries/prison_break.jpg"
import theboys from "../assets/actionSeries/the_boys.jpg"
import thenightagent from "../assets/actionSeries/the_night_agent.jpg"
import theterminallist from "../assets/actionSeries/the_terminal_list.jpg"
import wandavision from "../assets/actionSeries/wandavision.jpg"

export const ActionSeries = () => {
    const movies =[
        {id: 1, title: "Daredevil", rating: 7.1, year: 2015, image: daredevil},
        {id: 2, title: "Loki", rating: 7.6, year: 2021, image: loki},
        {id: 3, title: "Peacemaker", rating: 7.5, year: 2022, image: peacemaker},
        {id: 4, title: "Prison Break", rating: 7.3, year: 2005, image: prisonbreak},
        {id: 5, title: "The boys", rating: 9.0, year: 2019, image: theboys},
        {id: 6, title: "The Night Agent", rating: 10.0, year: 2023, image: thenightagent},
        {id: 7, title: "The Terminal List", rating: 7.3, year: 2022, image: theterminallist},
        {id: 8, title: "WandaVision", rating: 7.6, year: 2021, image: wandavision}
    ]
  return (
    <>
        <Navigation_baar />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending Series" movies={movies} />
            <Movie_row title="Latest Release" movies={movies} />
            <Movie_row title="Coming soon" movies={movies} />
        </div>
        <Footer />
    </>
  )
}
