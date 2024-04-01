import React from "react";
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import NavBar from "./NavBar";
import Toys from "./Toys";
import AddToys from "./AddToys";
import AboutUs from "./AboutUs";
import Profile from "./Profile"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="add-toys" element={<AddToys />} />
        <Route path="toys" element={<Toys />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;