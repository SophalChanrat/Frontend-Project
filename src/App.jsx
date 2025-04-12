import React from "react";
<<<<<<< HEAD
import TrendingMovies from "./Components/Pages/Animation.jsx";
import { Navigation_baar } from "./Components/navigation-bar/Navigation_baar.jsx";
import Romancemovies from "./Components/Pages/Romance.jsx";

const movies = [
];
=======
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Setting from "./pages/Setting.jsx";
import {Plan} from "./pages/Plan.jsx"
import { PlanProvider } from "./Components/context/PlanProvider.jsx";
import { UserProvider } from "./Components/context/UserProvider.jsx";
import { LoginPg } from "./pages/LoginPg.jsx";
import { SignupPg } from "./pages/SignupPg.jsx";
import { WatchList } from "./pages/WatchList.jsx";

>>>>>>> fd1ce23ab39ecacce4292ab6535c55beee05a098


function App() {
  return (
<<<<<<< HEAD
    <div className="bg-gray-900 min-h-screen p-8">
      <Navigation_baar />
      <TrendingMovies />
      <Romancemovies />

    </div>
=======
    <PlanProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path ="/setting" element={<Setting />}/>
          <Route path="/plan" element={<Plan />} />
          <Route path="/login" element={<LoginPg />} />
          <Route path="/signup" element={<SignupPg />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </UserProvider>
    </PlanProvider>

>>>>>>> fd1ce23ab39ecacce4292ab6535c55beee05a098
  );
}

export default App;
