import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Setting from "./pages/Setting.jsx";
import {Plan} from "./pages/Plan.jsx"
import { PlanProvider } from "./Components/context/PlanProvider.jsx";
import { UserProvider } from "./Components/context/UserProvider.jsx";
import { LoginPg } from "./pages/LoginPg.jsx";
import { SignupPg } from "./pages/SignupPg.jsx";
import { WatchList } from "./pages/WatchList.jsx";


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
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="trending" element={<Home />} />
        </Routes>
      </UserProvider>
    </PlanProvider>

  );
}

export default App;
