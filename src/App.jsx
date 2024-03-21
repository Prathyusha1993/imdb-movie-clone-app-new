import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// 6e07b1f77e80ddd4e3cd709d8df384d4
// https://api.themoviedb.org/3/movie/popular?api_key=6e07b1f77e80ddd4e3cd709d8df384d4&language=en-US&page=2
