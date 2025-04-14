// Import your episode images
import Episode1 from "../assets/image-75-3.png";
import Episode2 from "../assets/image-75-3.png";
import Episode3 from "../assets/image-75-3.png";
import Episode4 from "../assets/image-75-3.png";

// Import series images
import Arcane from "../assets/arcane.png";
import FamilyGuy from "../assets/family-guy.png";
import RickMorty from "../assets/rick-morty.png";
import Simpsons from "../assets/simpsons.png";
import WhatIf from "../assets/what-if.png";
import Invincible from "../assets/invincible.png";
import series1 from "../assets/series1.jpg"
import series2 from "../assets/series2.jpg"
import series3 from "../assets/series3.jpg"
import series4 from "../assets/series4.png"
import series5 from "../assets/series5.jpg"

export const seriesData = {
  invincible: {
    id: "invincible",
    title: "Invincible",
    description: "An adult animated superhero series that revolves around 17-year-old Mark Grayson, who's just like every other guy his age - except his father is the most powerful superhero on the planet, Omni-Man",
    genre: "Animation • Action",
    year: "2021",
    seasons: "3 seasons",
    starring: "Steven Yeun, J.K. Simmons, Sandra Oh",
    director: "Robert Kirkman",
    backgroundImage: Invincible,
    episodesBySeason: {
      1: [
        {
          id: 1,
          title: "IT'S ABOUT TIME",
          description: "When Mark Grayson finally inherits powers from his superhero father, it's a dream come true. But there's more to being a hero than just choosing a name and costume.",
          duration: "51 min",
          date: "March 21, 2021",
          image: Episode1,
          backgroundImage: Episode1,
          genre: "Animation • Action",
          starring: "Steven Yeun, J.K. Simmons",
          director: "Robert Kirkman"
        },
        {
          id: 2,
          title: "HERE GOES NOTHING",
          description: "With his father out of action, Mark struggles to defend the city against an interdimensional invasion, joining forces with a team of teenage superheroes.",
          duration: "48 min",
          date: "March 26, 2021",
          image: Episode2,
          backgroundImage: Episode2,
          genre: "Animation • Action",
          starring: "Steven Yeun, J.K. Simmons",
          director: "Robert Kirkman"
        },
        {
          id: 3,
          title: "WHO YOU CALLING UGLY?",
          description: "Mark has to cut a study date short to help save Mount Rushmore from a crazed scientist. Robot deals with drama as he assembles a new team of world-saving superheroes.",
          duration: "51 min",
          date: "March 21, 2021",
          image: Episode3,
          backgroundImage: Episode3,
          genre: "Animation • Action",
          starring: "Steven Yeun, J.K. Simmons",
          director: "Robert Kirkman"
        },
        {
          id: 4,
          title: "NEIL ARMSTRONG, EAT YOUR HEART OUT",
          description: "It’s two firsts for Mark: a first date and a first trip to another planet. At the same time, Nolan and Debbie revisit their own first vacation together.",
          duration: "51 min",
          date: "March 21, 2021",
          image: Episode4,
          backgroundImage: Episode4,
          genre: "Animation • Action",
          starring: "Steven Yeun, J.K. Simmons",
          director: "Robert Kirkman"
        },
        {
          id: 5,
          title: "THAT ACTUALLY HURT",
          description: "Feeling confident in his new abilities, Mark risks a team-up with a local villain to take down a crime lord, while simultaneously juggling school and a new relationship.",
          duration: "51 min",
          date: "March 21, 2021",
          image: Episode4,
          backgroundImage: Episode4,
          genre: "Animation • Action",
          starring: "Steven Yeun, J.K. Simmons",
          director: "Robert Kirkman"
        }
      ],
      2: [
        {
          id: 1,
          title: "A LESSON FOR YOUR NEXT LIFE",
          description: "In the aftermath of his father's betrayal, Mark struggles with his responsibilities as Invincible and encounters an unexpected enemy.",
          duration: "51 min",
          date: "November 2023",
          image: Episode1,
          backgroundImage: Episode1,
          genre: "Animation • Action",
          starring: "Steven Yeun, J.K. Simmons",
          director: "Robert Kirkman"
        },
        {
          id: 2,
          title: "IN ABOUT SIX HOURS I LOSE MY VIRGINITY TO A FISH",
          description: "It’s summer break for Mark and his friends, but supervillains don't take a vacation. Mark is forced to face the consequences of Omni-Man's double life.",
          duration: "48 min",
          date: "November 2023",
          image: Episode2,
          backgroundImage: Episode2,
          genre: "Animation • Action",
          starring: "Steven Yeun, J.K. Simmons",
          director: "Robert Kirkman"
        },
        {
            id: 3,
            title: "THIS MISSIVE, THIS MACHINATION!",
            description: "Mark's world is turned upside down when he discovers the truth about his father's past and the implications it has for his own future.",
            duration: "51 min",
            date: "November 2023",
            image: Episode3,
            backgroundImage: Episode3,
            genre: "Animation • Action",
            starring: "Steven Yeun, J.K. Simmons",
            director: "Robert Kirkman"
        },
        {
            id: 4,
            title: " IT'S BEEN A WHILE",
            description: "Mark answers the call to save an alien species, but the mission has unexpected personal consequences. ",
            duration: "51 min",
            date: "November 2023",
            image: Episode4,
            backgroundImage: Episode4,
            genre: "Animation • Action",
            starring: "Steven Yeun, J.K. Simmons",
            director: "Robert Kirkman"
        }
      ],
      3: [
        {
            id: 1,
            title: "THE END OF ALL THINGS",
            description: "Mark faces his greatest challenge yet as he battles against the forces that threaten to destroy everything he holds dear.",
            duration: "51 min",
            date: "November 2023",
            image: Episode1,
            backgroundImage: Episode1,
            genre: "Animation • Action",
            starring: "Steven Yeun, J.K. Simmons",
            director: "Robert Kirkman"
        },
        {
            id: 2,
            title: "THE FINAL SHOWDOWN",
            description: "In a climactic battle, Mark must confront his father and make a choice that will change the fate of the world.",
            duration: "48 min",
            date: "November 2023",
            image: Episode2,
            backgroundImage: Episode2,
            genre: "Animation • Action",
            starring: "Steven Yeun, J.K. Simmons",
            director: "Robert Kirkman"
        },
        {
            id: 3,
            title: "A NEW BEGINNING",
            description: "After the dust settles, Mark must navigate a new world and redefine what it means to be Invincible.",
            duration: "51 min",
            date: "November 2023",
            image: Episode3,
            backgroundImage: Episode3,
            genre: "Animation • Action",
            starring: "Steven Yeun, J.K. Simmons",
            director: "Robert Kirkman"
        },
        {
            id: 4,
            title: "THE LEGACY OF INVINCIBLE",
            description: "Mark reflects on his journey and the legacy he will leave behind as Invincible.",
            duration: "51 min",
            date: "November 2023",
            image: Episode4,
            backgroundImage: Episode4,
            genre: "Animation • Action",
            starring: "Steven Yeun, J.K. Simmons",
            director: "Robert Kirkman"
        }
      ]
    }
  }
};

export const relatedSeriesData = [
  {
    id: "arcane",
    title: "ARCANE",
    subtitle: "LEAGUE OF LEGENDS",
    network: "NETFLIX | NOVEMBER",
    rating: "9.0",
    year: "2024",
    image: Arcane,
    backgroundImage: Arcane,
    description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
    genre: "Animation • Action",
    starring: "Hailee Steinfeld, Kevin Alejandro",
    director: "Pascal Charrue",
    seasons: "2 seasons"
  },
  {
    id: "familyguy",
    title: "Family Guy",
    subtitle: "LEAGUE OF LEGENDS",
    network: "NETFLIX | NOVEMBER",
    rating: "8.1",
    year: "1999",
    image: FamilyGuy,
    backgroundImage: FamilyGuy,
    description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
    genre: "Animation • Comedy",
    starring: "Seth MacFarlane, Alex Borstein",
    director: "Seth MacFarlane",
    seasons: "22 seasons"
  },
  {
    id: "rickmorty",
    title: "Rick and Morty",
    subtitle: "LEAGUE OF LEGENDS",
    network: "NETFLIX | NOVEMBER",
    rating: "9.1",
    year: "2013",
    image: RickMorty,
    backgroundImage: RickMorty,
    description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
    genre: "Animation • Sci-Fi",
    starring: "Justin Roiland, Chris Parnell",
    director: "Dan Harmon",
    seasons: "7 seasons"
  },
  {
    id: "simpsons",
    title: "The Simpsons",
    subtitle: "LEAGUE OF LEGENDS",
    network: "NETFLIX | NOVEMBER",
    rating: "8.7",
    year: "1989",
    image: Simpsons,
    backgroundImage: Simpsons,
    description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
    genre: "Animation • Comedy",
    starring: "Dan Castellaneta, Nancy Cartwright",
    director: "Matt Groening",
    seasons: "35 seasons"
  },
  {
    id: "invincible",
    title: "Invincible",
    subtitle: "LEAGUE OF LEGENDS",
    network: "NETFLIX | NOVEMBER",
    rating: "8.7",
    year: "2021",
    image: Invincible,
    backgroundImage: Invincible,
    description: "An adult animated superhero series that revolves around 17-year-old Mark Grayson, who's just like every other guy his age - except his father is the most powerful superhero on the planet, Omni-Man",
    genre: "Animation • Action",
    starring: "Steven Yeun, J.K. Simmons, Sandra Oh",
    director: "Robert Kirkman",
    seasons: "3 seasons"
  },
  {
    id: "whatif",
    title: "What If...?",
    subtitle: "LEAGUE OF LEGENDS",
    network: "NETFLIX | NOVEMBER",
    rating: "7.3",
    year: "2021",
    image: WhatIf,
    backgroundImage: WhatIf,
    description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
    genre: "Animation • Action",
    starring: "Jeffrey Wright, Hayley Atwell",
    director: "Bryan Andrews",
    seasons: "2 seasons"
  }
];