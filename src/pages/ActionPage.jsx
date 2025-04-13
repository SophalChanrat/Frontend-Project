import React from 'react'
import { Navigation_baar } from '../Components/navigation-bar/Navigation_baar'
import { Footer } from '../Components/footer/Footer'
import { Movie_row } from '../Components/Movie_row'
import { CategoryChooser } from '../Components/CategoryChooser'
import guadian from "../assets/action/guardian.jpg";
import deadpool from "../assets/action/deadpool.jpg";
import iamlegend from "../assets/action/Iamlegend.jpg";
import judgement_of_paris from "../assets/action/judgement_of_paris.jpg";
import lethal_weapon from "../assets/action/Lethal_weapon.jpg";
import theAvenger from "../assets/action/The_avenger.jpg";
import the_last_soldier from "../assets/action/the_last_soldier.jpg";
import { movieDetails, relatedMovies, actionMovies } from '../data/moviedata'



export const ActionPage = () => {
   
  return (
    <>
        <Navigation_baar />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending Today" movies={actionMovies} />
            <Movie_row title="Lastest Release" movies={actionMovies} />
            <Movie_row title="Coming Soon" movies={actionMovies} />
        </div>
        <Footer />
    </>
  )
}
