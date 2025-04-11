import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Home } from "./Home.jsx";
import Setting from "./pages/Setting.jsx";
import {Plan} from "./pages/Plan.jsx"
import { PlanProvider } from "./Components/context/PlanProvider.jsx";
import { UserProvider } from "./Components/context/UserProvider.jsx";
import { LoginPg } from "./pages/LoginPg.jsx";
import { SignupPg } from "./pages/SignupPg.jsx";
import MovieRow from "./Components/Movie_row.jsx";
import { Navigation_baar } from "./Components/navigation-bar/Navigation_baar.jsx";
import { Footer } from "./Components/footer/Footer.jsx";

// const movies = [
//   {
//     id: 1,
//     name: "Violet Evergarden",
//     poster: "",
//     rating: "8.5",
//   },
//   {
//     id: 2,
//     name: "Ponyo",
//     poster: "",
//     rating: "7.8",
//   },
//   {
//     id: 3,
//     name: "Suzume",
//     poster: "",
//     rating: "8.2",
//   },
//   {
//     id: 4,
//     name: "Black Clover",
//     poster: "",
//     rating: "8.0",
//   },
// ];

function App() {
  return (
    <PlanProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path ="/setting" element={<Setting />}/>
          <Route path="/plan" element={<Plan />} />
          <Route path="/login" element={<LoginPg />} />
          <Route path="/signup" element={<SignupPg />} />
        </Routes>
      </UserProvider>
    </PlanProvider>
  );
}

export default App;
