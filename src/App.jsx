import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import Setting from "./pages/Setting.jsx";
import {Plan} from "./pages/Plan.jsx"
import { PlanProvider } from "./Components/context/PlanProvider.jsx";
import { UserProvider } from "./Components/context/UserProvider.jsx";
import { LoginPg } from "./pages/LoginPg.jsx";
import { SignupPg } from "./pages/SignupPg.jsx";
import { WatchList } from "./pages/WatchList.jsx";
import { ActionPage } from "./pages/ActionPage.jsx";
import { ActionSeries } from "./pages/ActionSeries.jsx";
import RomancePage from "./pages/RomancePage.jsx";
import { RomanceSeries } from "./pages/RomanceSeries.jsx";
import MovieDetails from "./Components/Watch_movie.jsx";
import SeriesPage from "./Components/Series_page";
import { AnimationPage } from "./pages/AnimationPage.jsx";
import { HomeSeries } from "./pages/HomeSeries.jsx";
import { AnimationSeries } from "./pages/AnimationSeries.jsx";
import { AnimePage } from "./pages/AnimePage.jsx";
import { AnimeSeries } from "./pages/AnimeSeries.jsx";
import { HorrorPage } from "./pages/HorrorPage.jsx";
import { HorrorSeries } from "./pages/HorrorSeries.jsx";


function App() {
  return (
    <PlanProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/series" element={<HomeSeries />}/>
          <Route path ="/setting" element={<Setting />}/>
          <Route path="/plan" element={<Plan />} />
          <Route path="/login" element={<LoginPg />} />
          <Route path="/signup" element={<SignupPg />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/action" element={<ActionPage />} />
          <Route path="/action/series" element={<ActionSeries />} />
          <Route path="/romance" element={<RomancePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/series/:id" element={<SeriesPage />} />
          <Route path="/romance/series" element={<RomanceSeries />} />
          <Route path="/animation" element={<AnimationPage />} />
          <Route path="/animation/series" element={<AnimationSeries />} />
          <Route path="/anime" element={<AnimePage />} />
          <Route path="/anime/series" element={<AnimeSeries />} />
          <Route path="/horror" element={<HorrorPage />} /> 
          <Route path="/horror/series" element={<HorrorSeries />} />
          {/* Add more routes as needed */}
        </Routes>
      </UserProvider>
    </PlanProvider>

  );
}

export default App;
