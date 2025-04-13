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



export const ActionPage = () => {
    const actionMovies = [
        { id: 1, title: "The Guardian", rating: 7.1, year: 2025, image: guadian },
        { id: 2, title: "Deadpool", rating: 7.6, year: 2024, image: deadpool },
        { id: 3, title: "I am Legend", rating: 7.5, year: 2024, image: iamlegend },
        { id: 4, title: "Judgement of Paris", rating: 7.3, year: 2014, image: judgement_of_paris },
        { id: 5, title: "Lethal Weapon", rating: 9.0, year: 2021, image: lethal_weapon },
        { id: 6, title: "The Avenger", rating: 10.0, year: 2015, image: theAvenger },
        { id: 7, title: "The Last Soldier", rating: 7.3, year: 2014, image: the_last_soldier },
    ];
  return (
    <>
        <Navigation_baar />
        <CategoryChooser />
        <div className="main-content">
            <Movie_row title="Trending Movie" movies={actionMovies} />
            <Movie_row title="Lastest Release" movies={actionMovies} />
            <Movie_row title="Coming soon" movies={actionMovies} />
        </div>
        <Footer />
    </>
  )
}
